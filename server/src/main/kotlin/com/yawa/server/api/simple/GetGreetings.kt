package com.yawa.server.api.simple

import com.yawa.server.models.users.User
import mu.KotlinLogging
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class GetGreetings {

    @GetMapping("/simple/greetings")
    fun getGreetings(): GetAuthenticatedHelloResponse {
        log.info("Processing request")

        val authentication = SecurityContextHolder.getContext().authentication!!

        val user = if (authentication is AnonymousAuthenticationToken) null else (authentication.principal as User)

        val message = if (user == null) "Hello ANONYMOUS" else "Hello ${user.username}"

        return GetAuthenticatedHelloResponse(message)
    }

    data class GetAuthenticatedHelloResponse(val message: String)
}
