package com.yawa.server.api.auth.activation

import com.yawa.server.constants.OpenApiTags.AUTHENTICATION
import com.yawa.server.exceptions.UserAlreadyEnabledException
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import com.yawa.server.validators.Email
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

private val log = KotlinLogging.logger {}

@RestController
class SendUserActivationToken(
    @Autowired val userService: UserService,
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService,
) {

    @Operation(tags = [AUTHENTICATION])
    @PostMapping("/auth/activation/token", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun sendUserActivationToken(
        @RequestBody request: SendUserActivationTokenRequest,
    ): SendUserActivationTokenResponse {
        log.info("Processing request: $request")

        val user = userService.findUserByEmail(email = request.email)

        if (user.isEnabled) {
            log.info("User ${user.id} is already enabled. Skipping activation token")
            throw UserAlreadyEnabledException("User ${user.id} is already enabled")
        }

        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.ACTIVATE_USER)

        mailService.asyncSend(
            mailType = MailType.USER_CREATION_PENDING,
            recipient = user,
            attributes = mapOf(
                "firstname" to user.profile!!.firstname!!,
                "token" to actionToken.token,
                "action" to "auth/activate-user",
                "expiration" to actionToken.expiration.toString(),
            ),
        )

        return SendUserActivationTokenResponse("Activation token for user ${user.id} will be sent to user email")
    }

    data class SendUserActivationTokenRequest(
        @Email val email: String = "",
    )

    data class SendUserActivationTokenResponse(val message: String)
}
