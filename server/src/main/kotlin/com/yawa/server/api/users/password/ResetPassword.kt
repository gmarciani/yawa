package com.yawa.server.api.users.password

import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class ResetPassword(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val mailService: MailService
) {

    @PatchMapping("/users/{username}/password")
    fun resetPassword(@PathVariable username: String, @RequestBody request: ResetPasswordRequest): ResetPasswordResponse {
        log.info("Processing request: $request")

        val grant = actionTokenService.consumeToken(
            token = request.token, action = TokenAction.RESET_PASSWORD, username = username)

        val user = userService.findUser(username = username)

        log.info("Action token accepted for user $username to execute action ${grant.action}")

        userService.setPassword(user = user, password = request.password)

        mailService.asyncSend(
            mailType = MailType.PASSWORD_RESET_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "action" to "Login",
            )
        )

        return ResetPasswordResponse(message = "Confirmed password reset for user ${user.username}")
    }

    data class ResetPasswordRequest(val token: String, val password: String)

    data class ResetPasswordResponse(val message: String)
}
