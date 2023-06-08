package com.yawa.server.api.auth

import com.yawa.server.security.authentication.AuthenticationService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.Instant

private val log = KotlinLogging.logger {}

@RestController
class RefreshAuthentication(
    @Autowired val authenticationService: AuthenticationService,
) {

    @GetMapping("/auth/{username}/tokens")
    fun refreshAuthentication(@PathVariable username: String, @RequestBody request: RefreshAuthenticationRequest):
            RefreshAuthenticationResponse {
        log.info("Processing request for user $username: $request")

        val refreshToken = request.refreshToken

        val user = authenticationService.authenticateRefreshToken(refreshToken = refreshToken)

        log.info("Authenticated user: ${user.username}")

        val authenticationTokens = authenticationService.refreshAuthenticationTokens(refreshToken)

        log.info("Authentication tokens refreshed for user: ${user.username}")

        return RefreshAuthenticationResponse(
            accessToken = authenticationTokens.accessToken,
            accessTokenExpiration = authenticationTokens.accessTokenExpiration,
            refreshToken = authenticationTokens.refreshToken,
            refreshTokenExpiration = authenticationTokens.refreshTokenExpiration
        )
    }

    data class RefreshAuthenticationRequest(val refreshToken: String)

    data class RefreshAuthenticationResponse(
        val accessToken: String,
        val accessTokenExpiration: Instant,
        val refreshToken: String,
        val refreshTokenExpiration: Instant
    )
}
