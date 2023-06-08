package com.yawa.server.api.users.deletion

import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class DeleteUser(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val mailService: MailService
) {

    @DeleteMapping("/users/{username}")
    @PreAuthorize("authentication.principal.username == #username || hasRole('ROLE_ADMIN')")
    fun deleteUser(@PathVariable username: String, @RequestBody request: DeleteUserRequest): DeleteUserResponse {
        log.info("Processing request: $request")

        val grant = actionTokenService.consumeToken(
            token = request.token, action = TokenAction.CONFIRM_USER_DELETION, username = username)

        val user = userService.findUser(username = username)

        log.info("Action token accepted for user $username to execute action ${grant.action}")

        userService.deleteUser(user = user)

        mailService.asyncSend(
            mailType = MailType.USER_DELETION_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "action" to "index.html"
            )
        )

        return DeleteUserResponse(message = "Confirmed deletion of user ${user.username}")
    }

    data class DeleteUserRequest(val token: String)

    data class DeleteUserResponse(val message: String)
}
