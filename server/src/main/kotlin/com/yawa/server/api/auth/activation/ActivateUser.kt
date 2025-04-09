package com.yawa.server.api.auth.activation

import com.yawa.server.constants.OpenApiTags.AUTHENTICATION
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class ActivateUser(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val mailService: MailService,
) {

    @Operation(tags = [AUTHENTICATION])
    @PostMapping("/auth/activation", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun activateUser(
        @RequestBody request: ActivateUserRequest,
    ): ActivateUserResponse {
        log.info("Processing request: $request")

        val grant = actionTokenService.consumeToken(token = request.token, action = TokenAction.ACTIVATE_USER)

        val userId = grant.userId

        val user = userService.findUser(userId = userId)

        log.info("Action token accepted for user $userId to execute action ${grant.action}")

        userService.enableUser(user = user)

        mailService.asyncSend(
            mailType = MailType.USER_CREATION_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "firstname" to user.profile!!.firstname!!,
                "action" to "Login",
            ),
        )

        return ActivateUserResponse(message = "Confirmed activation of user $userId")
    }

    // Setting the default value is required on data class having single attributes
    // to make Jackson serialization/deserialization work.
    data class ActivateUserRequest(val token: String = "")

    data class ActivateUserResponse(val message: String)
}
