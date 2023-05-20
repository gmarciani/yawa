package com.yawa.server.events.users.password

import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class PasswordResetConfirmedListener(
    @Autowired val mailService: MailService
): ApplicationListener<PasswordResetConfirmedEvent> {
    override fun onApplicationEvent(event: PasswordResetConfirmedEvent) {
        val user = event.user
        log.info("ON EVENT ${event.javaClass.simpleName}: handling event for user ${user.username}")
        sendEmail(user)
    }

    private fun sendEmail(user: User) {
        mailService.send(
            mailType = MailType.PASSWORD_RESET_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "username" to user.username
            )
        )
    }
}
