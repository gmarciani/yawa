package com.yawa.server.api.users.creation

import com.yawa.server.exceptions.UserAlreadyEnabledException
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class SendUserActivationToken(
    @Autowired val userService: UserService,
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService
) {

    @GetMapping("/users/{username}/tokens/activation")
    @PreAuthorize("authentication.principal.username == #username || hasRole('ROLE_ADMIN')")
    fun sendUserActivationToken(@PathVariable username: String): SendUserActivationTokenResponse {
        log.info("Processing request")

        val user = userService.findUser(username = username)

        if (user.isEnabled) {
            log.info("User $username is already enabled. Skipping activation token")
            throw UserAlreadyEnabledException("User $username is already enabled")
        }

        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.ACTIVATE_USER)

        mailService.asyncSend(
            mailType = MailType.USER_CREATION_PENDING,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "token" to actionToken.token,
                "action" to "POST:users/${user.username}/activation",
                "expiration" to actionToken.expiration.toString()
            )
        )

        return SendUserActivationTokenResponse("Activation token for user $username will be sent to user email")
    }

    data class SendUserActivationTokenResponse(val message: String)
}
