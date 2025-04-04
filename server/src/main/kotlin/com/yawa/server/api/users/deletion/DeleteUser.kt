package com.yawa.server.api.users.deletion

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class DeleteUser(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val mailService: MailService,
) {

    @Operation(tags = [USERS])
    @DeleteMapping("/users/me", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun deleteUser(
        @RequestBody request: DeleteUserRequest,
    ): DeleteUserResponse {
        log.info("Processing request: $request")

        val grant = actionTokenService.consumeToken(token = request.token, action = TokenAction.CONFIRM_USER_DELETION)

        val userId = grant.userId

        val user = userService.findUser(userId = userId)

        log.info("Action token accepted for user $userId to execute action ${grant.action}")

        userService.deleteUser(user = user)

        mailService.asyncSend(
            mailType = MailType.USER_DELETION_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "firstname" to user.profile!!.firstname!!,
                "action" to "index.html",
            ),
        )

        return DeleteUserResponse(message = "Confirmed deletion of user $userId")
    }

    data class DeleteUserRequest(val token: String)

    data class DeleteUserResponse(val message: String)
}
