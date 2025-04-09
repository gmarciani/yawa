package com.yawa.server.api.admin.auth

import com.yawa.server.constants.OpenApiTags
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
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
class AdminResetPassword(
    @Autowired val userService: UserService,
    @Autowired val mailService: MailService,
) {

    @Operation(tags = [OpenApiTags.ADMINISTRATION])
    @PostMapping("/admin/auth/password-reset", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun adminResetPassword(
        @RequestBody request: AdminResetPasswordRequest,
    ): AdminResetPasswordResponse {
        log.info("Processing request: $request")

        val user = userService.findUserByEmail(email = request.email)

        userService.setPassword(user = user, password = request.password)

        mailService.asyncSend(
            mailType = MailType.PASSWORD_RESET_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "firstname" to user.profile!!.firstname!!,
                "action" to "auth/login",
            ),
        )

        return AdminResetPasswordResponse(message = "Confirmed password reset for user ${user.id}")
    }

    data class AdminResetPasswordRequest(
        @Email val email: String,
        val password: String,
    )

    data class AdminResetPasswordResponse(val message: String)
}
