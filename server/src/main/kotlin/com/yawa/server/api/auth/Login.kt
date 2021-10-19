package com.yawa.server.api.auth

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.models.users.User
import com.yawa.server.validators.Password
import com.yawa.server.validators.Username
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class Login(
    @Autowired val authenticationManager: AuthenticationManager
) {

    @PostMapping("/Login")
    fun action(@Valid @RequestBody request: Request) : Response{
        log.info("Called with request: $request")

        try {
            val authenticate = authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(request.username, request.password))

            val user = authenticate.principal as User

            log.info("Authenticated user: $user")

            val token = JWT.create()
                    .withClaim("username", user.username)
                    .sign(Algorithm.HMAC256("secret"))

            log.info("Authentication token: $token")

            return Response(token = token, message = "Successfully logged in")
        } catch (exc: BadCredentialsException) {
            throw NotAuthorizedException("Cannot log in")
        }
    }

    data class Request(
        @Username val username: String,
        @Password val password: String
    )

    data class Response(val token: String, val message: String)
}
