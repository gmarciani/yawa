package com.yawa.server.events.listeners

import com.yawa.server.events.UserCreationConfirmedEvent
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
class UserCreationConfirmedListener(
    @Autowired val confirmationTokenRepository: ConfirmationTokenRepository,
    @Autowired val mailService: MailService
): ApplicationListener<UserCreationConfirmedEvent> {
    override fun onApplicationEvent(event: UserCreationConfirmedEvent) {
        log.info("ON USER CREATION CONFIRMED: handling confirmation for the creation of user ${event.user.username}")
        sendConfirmationEmail(event.user)
    }

    private fun sendConfirmationEmail(user: User) {
        val token = ConfirmationToken(user = user)
        confirmationTokenRepository.save(token)
        mailService.send(
            recipient = user.email,
            subject = "CONFIRMED USER CREATION",
            body = "User creation confirmed!")
    }
}
