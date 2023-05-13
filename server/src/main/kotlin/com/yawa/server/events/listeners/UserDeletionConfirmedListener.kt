package com.yawa.server.events.listeners

import com.yawa.server.events.UserDeletionConfirmedEvent
import com.yawa.server.models.tokens.ConfirmationToken
import com.yawa.server.models.users.User
import com.yawa.server.repositories.ConfirmationTokenRepository
import com.yawa.server.services.MailService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class UserDeletionConfirmedListener(
    @Autowired val confirmationTokenRepository: ConfirmationTokenRepository,
    @Autowired val mailService: MailService
): ApplicationListener<UserDeletionConfirmedEvent> {
    override fun onApplicationEvent(event: UserDeletionConfirmedEvent) {
        log.info("ON USER DELETION CONFIRMED: handling confirmation for the deletion of user ${event.user.username}")
        sendConfirmationEmail(event.user)
    }

    private fun sendConfirmationEmail(user: User) {
        val token = ConfirmationToken(user = user)
        confirmationTokenRepository.save(token)
        mailService.send(
            recipient = user.email,
            subject = "USER DELETION CONFIRMED",
            body = "User deletion confirmed!")
    }
}
