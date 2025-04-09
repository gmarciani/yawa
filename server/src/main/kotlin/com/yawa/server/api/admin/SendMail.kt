package com.yawa.server.api.admin

import com.yawa.server.constants.OpenApiTags.ADMINISTRATION
import com.yawa.server.interceptors.RequestIdAssigner
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

private val log = KotlinLogging.logger {}

@RestController
class SendMail(
    @Autowired val mailService: MailService,
    @Autowired val userService: UserService,
) {

    @Operation(tags = [ADMINISTRATION])
    @PostMapping("/admin/mail", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun sendMail(
        @Valid @RequestBody request: SendMailRequest,
    ): SendMailResponse {
        log.info("Processing request: $request")

        val user = userService.findUser(userId = request.recipientId)

        mailService.send(
            mailType = request.mailType,
            recipient = user,
            attributes = request.attributes,
        )

        return SendMailResponse(message = "Mail sent to ${user.id}")
    }

    data class SendMailRequest(
        val mailType: MailType,
        val attributes: Map<String, String>,
        val recipientId: UUID,
    )

    data class SendMailResponse(val message: String)
}
