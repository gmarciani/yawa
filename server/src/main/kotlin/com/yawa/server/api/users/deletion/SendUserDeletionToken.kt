package com.yawa.server.api.users.deletion

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class SendUserDeletionToken(
    @Autowired val userService: UserService,
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService,
) {

    @Operation(tags = [USERS])
    @PostMapping("/users/me/deletion/token", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun sendUserDeletionToken(
        @AuthenticationPrincipal user: User,
    ): SendUserDeletionTokenResponse {
        log.info("Processing request for user ${user.id}")

        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.CONFIRM_USER_DELETION)

        mailService.asyncSend(
            mailType = MailType.USER_DELETION_PENDING,
            recipient = user,
            attributes = mapOf(
                "firstname" to user.profile!!.firstname!!,
                "token" to actionToken.token,
                "action" to "auth/delete-user",
                "expiration" to actionToken.expiration.toString(),
            ),
        )

        return SendUserDeletionTokenResponse("Deletion token for user ${user.id} will be sent to user email")
    }

    data class SendUserDeletionTokenResponse(val message: String)
}
