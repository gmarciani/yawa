package com.yawa.server.listeners

import com.yawa.server.events.UserCreatedEvent
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
class UserCreatedListener(
    @Autowired val confirmationTokenRepository: ConfirmationTokenRepository,
    @Autowired val mailService: MailService
): ApplicationListener<UserCreatedEvent> {
    override fun onApplicationEvent(event: UserCreatedEvent) {
        log.info("ON USER CREATED: handling creation of user ${event.user.username}")
        sendConfirmationEmail(event.user)
    }

    private fun sendConfirmationEmail(user: User) {
        val token = ConfirmationToken(user = user)
        confirmationTokenRepository.save(token)
        mailService.send(
            recipient = user.email,
            subject = "CONFIRM USER CREATION",
            body = "Confirmation Token: ${token.id}")
    }
}
