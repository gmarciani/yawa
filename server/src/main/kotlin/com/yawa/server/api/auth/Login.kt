package com.yawa.server.api.auth

import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.security.authentication.JwtService
import com.yawa.server.validators.Password
import com.yawa.server.validators.Username
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.DisabledException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class Login(
    @Autowired val authenticationManager: AuthenticationManager,
    @Autowired val jwtService: JwtService
) {

    @PostMapping("/Login")
    fun login(@Valid @RequestBody request: LoginRequest): LoginResponse {
        log.info("Called with request: $request")

        try {
            val authenticate = authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(request.username, request.password)
            )

            val user = authenticate.principal as org.springframework.security.core.userdetails.User

            log.info("Authenticated user: $user")

            val token = jwtService.issue(user.username)

            log.info("Authentication token: $token")

            return LoginResponse(token = token, message = "Successfully logged in as ${user.username}")
        } catch (exc: DisabledException) {
            throw NotAuthorizedException("User is not enabled")
        } catch (exc: BadCredentialsException) {
            throw NotAuthorizedException("Cannot log in")
        }
    }

    data class LoginRequest(
        @Username val username: String,
        @Password val password: String
    )

    data class LoginResponse(val token: String, val message: String)
}
