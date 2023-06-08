package com.yawa.server.api.users.password

import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class SendPasswordResetToken(
    @Autowired val userService: UserService,
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService
) {

    @GetMapping("/users/{username}/tokens/password")
    fun sendPasswordResetToken(@PathVariable username: String): SendPasswordResetTokenResponse {
        log.info("Processing request")

        val user = userService.findUser(username = username)

        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.RESET_PASSWORD)

        mailService.asyncSend(
            mailType = MailType.PASSWORD_RESET_PENDING,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "token" to actionToken.token,
                "action" to "PATCH:users/${user.username}/password",
                "expiration" to actionToken.expiration.toString()
            )
        )

        return SendPasswordResetTokenResponse("Password reset token for user $username will be sent to user email")
    }

    data class SendPasswordResetTokenResponse(val message: String)
}
