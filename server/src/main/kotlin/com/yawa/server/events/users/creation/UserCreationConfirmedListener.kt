package com.yawa.server.events.users.creation

import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class UserCreationConfirmedListener(
    @Autowired val mailService: MailService
): ApplicationListener<UserCreationConfirmedEvent> {
    override fun onApplicationEvent(event: UserCreationConfirmedEvent) {
        val user = event.user
        log.info("ON EVENT ${event.javaClass.simpleName}: handling event for user ${user.username}")
        sendEmail(user)
    }

    private fun sendEmail(user: User) {
        mailService.send(
            mailType = MailType.USER_CREATION_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "action" to "Login",
            )
        )
    }
}
