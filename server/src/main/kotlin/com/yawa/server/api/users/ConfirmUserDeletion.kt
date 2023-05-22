package com.yawa.server.api.users

import com.yawa.server.events.users.deletion.UserDeletionConfirmedEvent
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationEventPublisher
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.util.*
import jakarta.validation.Valid


private val log = KotlinLogging.logger {}

@RestController
class ConfirmUserDeletion(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val applicationEventPublisher: ApplicationEventPublisher
) {

    @PostMapping("/ConfirmUserDeletion")
    fun confirmUserDeletion(@Valid @RequestBody request: ConfirmUserDeletionRequest): ConfirmUserDeletionResponse{
        log.info("Processing request: $request")

        val token = request.token

        val grant = actionTokenService.consumeToken(token = token, action = TokenAction.CONFIRM_USER_DELETION)

        val username = grant.username
        val action = grant.action

        val user = userService.findUser(username = username)

        log.info("Action token accepted for user $username to execute action $action")

        userService.deleteUser(user = user)

        applicationEventPublisher.publishEvent(UserDeletionConfirmedEvent(user = user))

        return ConfirmUserDeletionResponse(message = "Confirmed deletion of user ${user.username}")
    }

    data class ConfirmUserDeletionRequest(val token: String)

    data class ConfirmUserDeletionResponse(val message: String)
}
