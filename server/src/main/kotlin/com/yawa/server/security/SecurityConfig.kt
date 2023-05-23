package com.yawa.server.security

import com.yawa.server.models.users.UserRole
import com.yawa.server.security.authentication.AnonymousAuthenticationFilter
import com.yawa.server.security.authentication.JwtTokenFilter
import com.yawa.server.security.authentication.UserInfoService
import com.yawa.server.security.authorization.AccessControlAuthorizationFilter
import com.yawa.server.security.throttling.ThrottlingFilter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
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
    fun passwordEncoder(): PasswordEncoder =  BCryptPasswordEncoder()

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain? {
        http.sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) }
        http.cors { it.configurationSource(corsConfigurationSource()) }
        http.csrf { it.disable() }

        // Set permissions on endpoints
        http.authorizeHttpRequests { authorize -> authorize
            // User Management
            .requestMatchers("/CreateUser").permitAll()
            .requestMatchers("/ConfirmUserCreation").permitAll()

            // User Authentication
            .requestMatchers("/Login").permitAll()
            .requestMatchers("/RefreshAuthentication").permitAll()
            .requestMatchers("/AuthorizePasswordReset").permitAll()
            .requestMatchers("/ResetPassword").permitAll()

            // Examples
            .requestMatchers("/GetDeterministicOutcome").permitAll()
            .requestMatchers("/GetRandomOutcome").permitAll()
            .requestMatchers("/GetAuthenticatedHello").permitAll()

            // Administration endpoints
            .requestMatchers("/ListUsers").hasRole(UserRole.ADMIN.name)
            .requestMatchers("/admin/**").hasRole(UserRole.ADMIN.name)
            .requestMatchers("/manage/prometheus").hasAnyRole(UserRole.ADMIN.name, UserRole.PROMETHEUS.name)
            .requestMatchers("/manage/**").hasRole(UserRole.ADMIN.name)

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
