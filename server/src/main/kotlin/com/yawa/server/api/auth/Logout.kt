package com.yawa.server.api.auth

import com.yawa.server.models.users.User
import mu.KotlinLogging
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class Logout {

    @PostMapping("/Logout")
    fun logout(authentication: Authentication): LogoutResponse {
        log.info("Called with authentication: $authentication")
        val user = authentication.principal as User
        return LogoutResponse(message = "Bye ${user.username}")
    }

    data class LogoutResponse(val message: String)
}
