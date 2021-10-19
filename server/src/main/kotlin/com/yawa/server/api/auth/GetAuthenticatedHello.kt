package com.yawa.server.api.auth

import com.yawa.server.models.users.User
import mu.KotlinLogging
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class GetAuthenticatedHello {

    @GetMapping("/GetAuthenticatedHello")
    fun action(authentication: Authentication) : Response {
        log.info("Called with authentication: {}", authentication)
        val user = authentication.principal as User
        return Response(message = "Hello ${user.username}")
    }

    data class Response(val message: String)
}
