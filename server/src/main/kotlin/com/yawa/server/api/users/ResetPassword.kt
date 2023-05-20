package com.yawa.server.api.users

import com.yawa.server.events.users.password.PasswordResetConfirmedEvent
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationEventPublisher
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class ResetPassword(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val applicationEventPublisher: ApplicationEventPublisher
) {

    @PostMapping("/ResetPassword")
    fun resetPassword(@Valid @RequestBody request: ResetPasswordRequest): ResetPasswordResponse{
        log.info("Processing request: $request")

        val token = request.token

        val grant = actionTokenService.consumeToken(token = token, action = TokenAction.RESET_PASSWORD)

        val username = grant.username
        val action = grant.action

        val user = userService.findUser(username = username)

        log.info("Action token accepted for user $username to execute action $action")

        userService.setPassword(user = user, password = request.password)

        applicationEventPublisher.publishEvent(PasswordResetConfirmedEvent(user = user))

        return ResetPasswordResponse(message = "Confirmed password reset for user ${user.username}")
    }

    data class ResetPasswordRequest(val token: String, val password: String)

    data class ResetPasswordResponse(val message: String)
}
