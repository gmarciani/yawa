package com.yawa.server.api.auth.password

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
class ResetPassword(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val mailService: MailService,
) {

    @Operation(tags = [AUTHENTICATION])
    @PostMapping("/auth/password-reset", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun resetPassword(
        @RequestBody request: ResetPasswordRequest,
    ): ResetPasswordResponse {
        log.info("Processing request: $request")

        val grant = actionTokenService.consumeToken(token = request.token, action = TokenAction.RESET_PASSWORD)

        val userId = grant.userId

        val user = userService.findUser(userId = userId)

        log.info("Action token accepted for user $userId to execute action ${grant.action}")

        userService.setPassword(user = user, password = request.password)

        mailService.asyncSend(
            mailType = MailType.PASSWORD_RESET_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "firstname" to user.profile!!.firstname!!,
                "action" to "Login",
            ),
        )

        return ResetPasswordResponse(message = "Confirmed password reset for user $userId")
    }

    data class ResetPasswordRequest(
        val password: String,
        val token: String,
    )

    data class ResetPasswordResponse(val message: String)
}
