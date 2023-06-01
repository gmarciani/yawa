package com.yawa.server.events.users.deletion

import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class UserDeletionConfirmedListener(
    @Autowired val userService: UserService,
    @Autowired val mailService: MailService
): ApplicationListener<UserDeletionConfirmedEvent> {
    override fun onApplicationEvent(event: UserDeletionConfirmedEvent) {
        val user = event.user
        log.info("ON EVENT ${event.javaClass.simpleName}: handling event for user ${user.username}")
        userService.deleteUser(user)
        sendEmail(user)
    }

    private fun sendEmail(user: User) {
        mailService.send(
            mailType = MailType.USER_DELETION_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "action" to "index.html"
            )
        )
    }
}
