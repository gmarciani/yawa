package com.yawa.server.api.auth

import com.yawa.server.security.authentication.AuthenticationService
import com.yawa.server.validators.Password
import com.yawa.server.validators.Username
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.Instant

private val log = KotlinLogging.logger {}

@RestController
class Login(
    @Autowired val authenticationService: AuthenticationService,
) {

    @PostMapping("/Login")
    fun login(@Valid @RequestBody request: LoginRequest): LoginResponse {
        log.info("Processing request: $request")

        val user = authenticationService.authenticate(username = request.username, password = request.password)

        log.info("Authenticated user: ${user.username}")

        val authenticationTokens = authenticationService.generateAuthenticationTokens(
            user = user, neverExpire = request.neverExpire
        )

        log.info("Authentication tokens generated for user: ${user.username}")

        return LoginResponse(
            accessToken = authenticationTokens.accessToken,
            accessTokenExpiration = authenticationTokens.accessTokenExpiration,
            refreshToken = authenticationTokens.refreshToken,
            refreshTokenExpiration = authenticationTokens.refreshTokenExpiration
        )
    }

    data class LoginRequest(
        @Username val username: String,
        @Password val password: String,
        val neverExpire: Boolean = false,
    )

    data class LoginResponse(
        val accessToken: String,
        val accessTokenExpiration: Instant,
        val refreshToken: String,
        val refreshTokenExpiration: Instant
    )
}
