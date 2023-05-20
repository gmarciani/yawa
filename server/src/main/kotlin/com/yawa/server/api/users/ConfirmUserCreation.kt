package com.yawa.server.api.users

import com.yawa.server.events.users.creation.UserCreationConfirmedEvent
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
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class ConfirmUserCreation(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val applicationEventPublisher: ApplicationEventPublisher
) {

    @PostMapping("/ConfirmUserCreation")
    fun confirmUserCreation(@Valid @RequestBody request: ConfirmUserCreationRequest): ConfirmUserCreationResponse{
        log.info("Processing request: $request")

        val token = request.token

        val grant = actionTokenService.consumeToken(token = token, action = TokenAction.CONFIRM_USER_CREATION)

        val username = grant.username
        val action = grant.action

        val user = userService.findUser(username = username)

        log.info("Action token accepted for user $username to execute action $action")

        userService.enableUser(user = user)

        applicationEventPublisher.publishEvent(UserCreationConfirmedEvent(user = user))

        return ConfirmUserCreationResponse(message = "Confirmed creation of user ${user.username}")
    }

    data class ConfirmUserCreationRequest(val token: String)

    data class ConfirmUserCreationResponse(val message: String)
}
