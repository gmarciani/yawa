package com.yawa.server.security.authentication

import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse

private val log = KotlinLogging.logger {}

@Component
class AnonymousAuthenticationFilter(
    @Autowired val authenticationService: AuthenticationService
): OncePerRequestFilter() {

    override fun doFilterInternal(request: HttpServletRequest,
                                  response: HttpServletResponse,
                                  chain: FilterChain
    ) {
        val authentication = SecurityContextHolder.getContext().authentication

        if (authentication == null) {
            log.info("AUTHENTICATION: Setting anonymous authentication")
            SecurityContextHolder.getContext().authentication = authenticationService.getAnonymousAuthentication()
        }

        chain.doFilter(request, response)
    }
}
