package com.yawa.server.security

import com.yawa.server.models.users.UserRole
import com.yawa.server.security.authentication.AnonymousAuthenticationFilter
import com.yawa.server.security.authentication.JwtTokenFilter
import com.yawa.server.security.authentication.UserInfoService
import com.yawa.server.security.authorization.AccessControlAuthorizationFilter
import com.yawa.server.security.encryption.PasswordEncodeService
import com.yawa.server.security.throttling.ThrottlingFilter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod.DELETE
import org.springframework.http.HttpMethod.GET
import org.springframework.http.HttpMethod.PATCH
import org.springframework.http.HttpMethod.POST
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
class SecurityConfig(
    @Autowired val userInfoService: UserInfoService,
    @Autowired val jwtTokenFilter: JwtTokenFilter,
    @Autowired val anonymousAuthenticationFilter: AnonymousAuthenticationFilter,
    @Autowired val accessControlAuthorizationFilter: AccessControlAuthorizationFilter,
    @Autowired val throttlingFilter: ThrottlingFilter
) {

    @Bean
    fun authenticationManager(authenticationConfiguration: AuthenticationConfiguration): AuthenticationManager? {
        return authenticationConfiguration.authenticationManager
    }

    @Bean
    fun authenticationProvider(): DaoAuthenticationProvider? {
        val authProvider = DaoAuthenticationProvider()
        authProvider.setUserDetailsService(userInfoService)
        authProvider.setPasswordEncoder(passwordEncoder())
        return authProvider
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder =  PasswordEncodeService()

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain? {
        http.sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) }
        http.cors { it.configurationSource(corsConfigurationSource()) }
        http.csrf { it.disable() }

        // Set permissions on endpoints
        http.authorizeHttpRequests { authorize -> authorize
            // Users
            .requestMatchers(POST, "/users").permitAll()
            .requestMatchers(POST, "/users/{username}/activation").permitAll()
            .requestMatchers(GET, "/users/{username}/tokens/activation").permitAll()
            .requestMatchers(GET, "/users/{username}/tokens/deletion").authenticated()
            .requestMatchers(DELETE, "/users/{username}").authenticated()

            // Users > Password
            .requestMatchers(GET, "/users/{username}/tokens/password").permitAll()
            .requestMatchers(PATCH, "/users/{username}/password").permitAll()

            // Users > Profile
            .requestMatchers(GET, "/users/{username}/profile").permitAll()
            .requestMatchers(PATCH, "/users/{username}/profile").authenticated()
            .requestMatchers(PATCH, "/users/{username}/profile/picture").authenticated()
            .requestMatchers(DELETE, "/users/{username}/profile/picture").authenticated()

            // Users > Settings
            .requestMatchers(GET, "/users/{username}/settings").authenticated()
            .requestMatchers(PATCH, "/users/{username}/settings").authenticated()

            // Authentication
            .requestMatchers("/auth/login").permitAll()
            .requestMatchers("/auth/logout").authenticated()
            .requestMatchers("/auth/{username}/tokens").authenticated()

            // Administration
            .requestMatchers("/admin/**").hasRole(UserRole.ADMIN.name)
            .requestMatchers("/manage/prometheus").hasAnyRole(UserRole.ADMIN.name, UserRole.PROMETHEUS.name)
            .requestMatchers("/manage/**").hasRole(UserRole.ADMIN.name)

            // Simple
            .requestMatchers("/simple/*").permitAll()

            // Documentation
            .requestMatchers("/docs/openapi/**").permitAll()
            .requestMatchers("/docs/swagger-ui.html").permitAll()

            // Static Resources
            .requestMatchers("/assets/**").permitAll()
            .requestMatchers("/public/**").permitAll()

            // Errors
            .requestMatchers("/error").permitAll()

            // Any other endpoint
            .anyRequest().denyAll()
        }

        // Add filters
        http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter::class.java)
        http.addFilterAfter(anonymousAuthenticationFilter, JwtTokenFilter::class.java)
        http.addFilterAfter(accessControlAuthorizationFilter, anonymousAuthenticationFilter::class.java)
        http.addFilterAfter(throttlingFilter, AccessControlAuthorizationFilter::class.java)


        return http.build()
    }

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val configuration = CorsConfiguration()
        configuration.allowedOrigins = listOf("http://localhost:3000")
        configuration.allowedMethods = listOf("*")
        configuration.allowedHeaders = listOf("*")
        configuration.allowCredentials = true
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", configuration)
        return source
    }
}
