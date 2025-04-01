package com.yawa.server.api.auth.password

import com.yawa.server.constants.OpenApiTags.AUTHENTICATION
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
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class SendPasswordResetToken(
    @Autowired val userService: UserService,
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService,
) {

    @Operation(tags = [AUTHENTICATION])
    @PostMapping("/auth/password-reset/token", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun sendPasswordResetToken(
        @RequestBody request: SendPasswordResetTokenRequest,
    ): SendPasswordResetTokenResponse {
        log.info("Processing request: $request")

        val user = userService.findUserByEmail(email = request.email)

        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.RESET_PASSWORD)

        mailService.asyncSend(
            mailType = MailType.PASSWORD_RESET_PENDING,
            recipient = user,
            attributes = mapOf(
                "token" to actionToken.token,
                "action" to "ResetPassword",
                "expiration" to actionToken.expiration.toString(),
            ),
        )

        return SendPasswordResetTokenResponse("Password reset token will be sent to user email ${request.email}")
    }

    data class SendPasswordResetTokenRequest(
        @Email val email: String = "",
    )

    data class SendPasswordResetTokenResponse(val message: String)
}
