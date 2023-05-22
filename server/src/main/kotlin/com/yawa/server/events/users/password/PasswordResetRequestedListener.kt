package com.yawa.server.events.users.password

import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class PasswordResetRequestedListener(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService
): ApplicationListener<PasswordResetRequestedEvent> {
    override fun onApplicationEvent(event: PasswordResetRequestedEvent) {
        val user = event.user
        log.info("ON EVENT ${event.javaClass.simpleName}: handling event for user ${user.username}")
        sendEmail(user)
    }

    private fun sendEmail(user: User) {
        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.RESET_PASSWORD)
        mailService.send(
            mailType = MailType.PASSWORD_RESET_PENDING,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "token" to actionToken.token,
                "resource" to "ResetPassword",
                "expiration" to actionToken.expiration.toString()
            )
        )
    }
}
