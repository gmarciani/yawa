package com.yawa.server.api.users.deletion

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
class SendUserDeletionToken(
    @Autowired val userService: UserService,
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService
) {

    @GetMapping("/users/{username}/tokens/deletion")
    @PreAuthorize("authentication.principal.username == #username || hasRole('ROLE_ADMIN')")
    fun sendUserDeletionToken(@PathVariable username: String): SendUserDeletionTokenResponse {
        log.info("Processing request")

        val user = userService.findUser(username = username)

        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.CONFIRM_USER_DELETION)

        mailService.asyncSend(
            mailType = MailType.USER_DELETION_PENDING,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "token" to actionToken.token,
                "action" to "DELETE:users/${user.username}",
                "expiration" to actionToken.expiration.toString()
            )
        )

        return SendUserDeletionTokenResponse("Deletion token for user $username will be sent to user email")
    }

    data class SendUserDeletionTokenResponse(val message: String)
}
