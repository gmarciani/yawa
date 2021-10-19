package com.yawa.server.components.security

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.exceptions.JWTVerificationException
import com.auth0.jwt.interfaces.DecodedJWT
import com.yawa.server.repositories.UserRepository
import mu.KotlinLogging
import org.apache.commons.lang3.StringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
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
    @Autowired val userRepository: UserRepository
) : OncePerRequestFilter() {

    override fun doFilterInternal(request: HttpServletRequest,
                                  response: HttpServletResponse,
                                  chain: FilterChain) {

        val authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION)
        if (StringUtils.isBlank(authorizationHeader) || !authorizationHeader.startsWith("Bearer ")) {
            chain.doFilter(request, response)
            return
        }

        val jwt: DecodedJWT?
        val token = authorizationHeader.split(" ")[1].trim()
        try {
            jwt = JWT.require(Algorithm.HMAC256("secret")).build().verify(token)
        } catch (exc: JWTVerificationException) {
            log.error("Cannot verify JWT: $exc")
            chain.doFilter(request, response)
            return
        }

        val username = jwt.getClaim("username").asString()
        val user = userRepository.findById(username).orElse(null)

        if (user == null) {
            chain.doFilter(request, response)
            return
        }

        val authentication = UsernamePasswordAuthenticationToken(user, null, user.authorities)

        authentication.setDetails(WebAuthenticationDetailsSource().buildDetails(request))

        SecurityContextHolder.getContext().setAuthentication(authentication)
        chain.doFilter(request, response)
    }
}
