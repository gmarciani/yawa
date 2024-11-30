package com.yawa.server.api.auth

import com.yawa.server.constants.OpenApiTags.AUTHENTICATION
import com.yawa.server.models.users.User
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.http.MediaType
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class Logout {

    @Operation(tags = [AUTHENTICATION])
    @PostMapping("/auth/logout", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun logout(): LogoutResponse {
        log.info("Processing request")

        val user = SecurityContextHolder.getContext().authentication.principal as User

        log.info("Logging out user: ${user.username}")

        return LogoutResponse(message = "Bye ${user.username}")
    }

    data class LogoutResponse(val message: String)
}
