package com.yawa.server.api.users

import com.yawa.server.events.users.password.PasswordResetRequestedEvent
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationEventPublisher
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import jakarta.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class AuthorizePasswordReset(
    @Autowired val userService: UserService,
    @Autowired val applicationEventPublisher: ApplicationEventPublisher
) {

    @PostMapping("/AuthorizePasswordReset")
    fun authorizePasswordReset(@Valid @RequestBody request: AuthorizePasswordResetRequest): AuthorizePasswordResetResponse{
        log.info("Processing request: $request")

        val username = request.username

        val user = userService.findUser(username = username)

        log.info("User found to generate action token: $username")

        applicationEventPublisher.publishEvent(PasswordResetRequestedEvent(user = user))

        return AuthorizePasswordResetResponse(message = "Password reset request submitted for user $username")
    }

    data class AuthorizePasswordResetRequest(val username: String)

    data class AuthorizePasswordResetResponse(val message: String)
}
