package com.yawa.server.api.auth

import com.yawa.server.constants.OpenApiTags.AUTHENTICATION
import com.yawa.server.security.authentication.AuthenticationService
import com.yawa.server.validators.Email
import com.yawa.server.validators.Password
import io.swagger.v3.oas.annotations.Operation
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.Instant
import java.util.UUID

private val log = KotlinLogging.logger {}

@RestController
class Login(
    @Autowired val authenticationService: AuthenticationService,
) {

    @Operation(tags = [AUTHENTICATION])
    @PostMapping("/auth/login", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun login(
        @Valid @RequestBody request: LoginRequest,
    ): LoginResponse {
        log.info("Processing request: $request")

        val user = authenticationService.authenticate(email = request.email, password = request.password)

        log.info("Authenticated user: ${user.id}")

        val authenticationTokens = authenticationService.generateAuthenticationTokens(
            user = user, neverExpire = request.neverExpire,
        )

        log.info("Authentication tokens generated for user: ${user.id}")

        return LoginResponse(
            userId = user.id!!,
            accessToken = authenticationTokens.accessToken,
            accessTokenExpiration = authenticationTokens.accessTokenExpiration,
            refreshToken = authenticationTokens.refreshToken,
            refreshTokenExpiration = authenticationTokens.refreshTokenExpiration,
        )
    }

    data class LoginRequest(
        @Email val email: String,
        @Password val password: String,
        val neverExpire: Boolean = false,
    )

    data class LoginResponse(
        val userId: UUID,
        val accessToken: String,
        val accessTokenExpiration: Instant,
        val refreshToken: String,
        val refreshTokenExpiration: Instant,
    )
}
