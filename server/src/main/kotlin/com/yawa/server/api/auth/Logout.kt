package com.yawa.server.api.auth

import com.yawa.server.constants.OpenApiTags.AUTHENTICATION
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserPrincipal
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.http.MediaType
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class Logout {

    @Operation(tags = [AUTHENTICATION])
    @PostMapping("/auth/logout", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun logout(
        @AuthenticationPrincipal user: User,
    ): LogoutResponse {
        log.info("Processing request for user ${user.id}")

        log.info("Logging out user: ${user.id}")

        return LogoutResponse(message = "Bye ${user.id}")
    }

    data class LogoutResponse(val message: String)
}
