package com.yawa.server.security.authentication

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import mu.KotlinLogging
import org.apache.commons.lang3.StringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter

private val log = KotlinLogging.logger {}

@Component
class JwtTokenFilter(
    @Autowired val authenticationService: AuthenticationService
): OncePerRequestFilter() {

    override fun doFilterInternal(request: HttpServletRequest,response: HttpServletResponse, chain: FilterChain) {

        val authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION)
        if (StringUtils.isBlank(authorizationHeader) || !authorizationHeader.startsWith("Bearer ")) {
            log.warn("AUTHENTICATION: Cannot find access token in request, setting anonymous authentication")
            SecurityContextHolder.getContext().authentication = authenticationService.getAnonymousAuthentication()
            chain.doFilter(request, response)
            return
        }

        val accessToken = authorizationHeader.split(" ")[1].trim()

        val user = try {
            authenticationService.authenticateAccessToken(accessToken = accessToken)
        } catch (exc: Exception) {
            log.error("AUTHENTICATION: Cannot authenticate user with access token: $exc")
            chain.doFilter(request, response)
            return
        }

        val authentication = UsernamePasswordAuthenticationToken(user, null, user.toUserDetails().authorities)

        authentication.details = WebAuthenticationDetailsSource().buildDetails(request)

        log.info("AUTHENTICATION: User authenticated with access token: ${user.username}")

        SecurityContextHolder.getContext().authentication = authentication

        chain.doFilter(request, response)
    }
}
