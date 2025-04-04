package com.yawa.server.api.simple

import com.yawa.server.constants.OpenApiTags.SIMPLE
import com.yawa.server.models.users.User
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.http.MediaType
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class GetGreetings {

    @Operation(tags = [SIMPLE])
    @GetMapping("/simple/greetings", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getGreetings(): GetAuthenticatedHelloResponse {
        log.info("Processing request")

        val authentication = SecurityContextHolder.getContext().authentication!!

        val user = if (authentication is AnonymousAuthenticationToken) null else (authentication.principal as User)

        val message = if (user == null) "Hello ANONYMOUS" else "Hello ${user.id}"

        return GetAuthenticatedHelloResponse(message)
    }

    data class GetAuthenticatedHelloResponse(val message: String)
}
