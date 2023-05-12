package com.yawa.server.components.security

import com.auth0.jwt.exceptions.JWTVerificationException
import com.auth0.jwt.interfaces.DecodedJWT
import com.yawa.server.models.users.UserRole
import com.yawa.server.repositories.UserRepository
import com.yawa.server.services.JwtService
import mu.KotlinLogging
import org.apache.commons.lang3.StringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

private val log = KotlinLogging.logger {}

@Component
class JwtTokenFilter(
    @Autowired val jwtService: JwtService,
    @Autowired val userRepository: UserRepository
) : OncePerRequestFilter() {

    override fun doFilterInternal(request: HttpServletRequest,
                                  response: HttpServletResponse,
                                  chain: FilterChain) {

        val authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION)
        if (StringUtils.isBlank(authorizationHeader) || !authorizationHeader.startsWith("Bearer ")) {
            log.warn("AUTHENTICATION: Cannot find access token in request, setting anonymous authentication")
            SecurityContextHolder.getContext().authentication = AnonymousAuthenticationToken(
                "anonymousKey", "anonymous", UserRole.ANONYMOUS.toAuthorities()
            )
            chain.doFilter(request, response)
            return
        }

        val token = authorizationHeader.split(" ")[1].trim()

        val jwt: DecodedJWT?

        try {
            jwt = jwtService.decode(token)
        } catch (exc: JWTVerificationException) {
            log.error("AUTHENTICATION: Cannot decode access token as JWT, skipping authentication method: $exc")
            chain.doFilter(request, response)
            return
        }

        val username = jwt.getClaim("username").asString()
        val user = userRepository.findById(username).orElse(null)

        if (user == null) {
            log.error("AUTHENTICATION: Cannot find user for the provided JWT, skipping authentication method")
            chain.doFilter(request, response)
            return
        }

        val authentication = UsernamePasswordAuthenticationToken(user, null, user.toUserDetails().authorities)

        authentication.details = WebAuthenticationDetailsSource().buildDetails(request)

        log.info("AUTHENTICATION: User authenticated with JWT access token: $username")

        SecurityContextHolder.getContext().authentication = authentication

        chain.doFilter(request, response)
    }
}
