package com.yawa.server.components.security

import com.yawa.server.components.mvc.OperationNameProvider
import com.yawa.server.models.users.UserRole
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.access.AccessDecisionManager
import org.springframework.security.access.AccessDecisionVoter
import org.springframework.security.access.vote.AuthenticatedVoter
import org.springframework.security.access.vote.RoleVoter
import org.springframework.security.access.vote.UnanimousBased
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.core.AuthenticationException
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.access.expression.WebExpressionVoter
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
class SecurityConfig(
    @Autowired val userInfoService: UserInfoService,
    @Autowired val jwtTokenFilter: JwtTokenFilter,
    @Autowired val operationNameProvider: OperationNameProvider
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
    fun passwordEncoder() : PasswordEncoder =  BCryptPasswordEncoder()

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain? {
        // Enable CORS and disable CSRF
        http.cors().and().csrf().disable()

            // Set session management to stateless
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()

            // Set unauthorized requests exception handler
            .exceptionHandling()
            .authenticationEntryPoint { _: HttpServletRequest?, response: HttpServletResponse, ex: AuthenticationException ->
                response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    ex.message
                )
            }

        // Set permissions on endpoints
        http.authorizeRequests()
            // Public endpoints
            .antMatchers("/GetDeterministicOutcome").permitAll()
            .antMatchers("/GetRandomOutcome").permitAll()
            .antMatchers("/CreateUsers").permitAll()
            .antMatchers("/Login").permitAll()
            // Administration endpoints
            .antMatchers("/ListUsers").hasRole(UserRole.ADMIN.name)
            .antMatchers("/manage/prometheus").hasAnyRole(UserRole.ADMIN.name, UserRole.PROMETHEUS.name)
            .antMatchers("/manage/**").hasRole(UserRole.ADMIN.name)

            // Any other endpoint
            .anyRequest().authenticated().accessDecisionManager(accessDecisionManager())

        // Add JWT token filter
        http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter::class.java)

        return http.build()
    }

    @Bean
    fun corsFilter() : CorsFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.allowCredentials = true
        config.addAllowedOrigin("*")
        config.addAllowedHeader("*")
        config.addAllowedMethod("*")
        source.registerCorsConfiguration("/**", config)
        return CorsFilter(source)
    }

    @Bean
    fun accessDecisionManager(): AccessDecisionManager? {
        val decisionVoters: List<AccessDecisionVoter<out Any?>> = listOf(
            WebExpressionVoter(),
            AuthenticatedVoter(),
            RoleVoter(),
//            hierarchyVoter(),
            AccessControlVoter(operationNameProvider)
        )
        return UnanimousBased(decisionVoters)
    }

//    @Bean
//    fun hierarchyVoter(): AccessDecisionVoter<*> {
//        val hierarchy = RoleHierarchyImpl()
//        hierarchy.setHierarchy("${UserRole.ADMIN} > ${UserRole.PROMETHEUS}\n${UserRole.ADMIN} > ${UserRole.NORMAL}")
//        return RoleHierarchyVoter(hierarchy)
//    }
}
