package com.yawa.server.api.admin

import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}
@RestController
class SendMail(
    @Autowired val mailService: MailService
) {

    @PostMapping("/admin/mail")
    fun sendMail(@Valid @RequestBody request: SendMailRequest): SendMailResponse {
        log.info("Processing request: $request")

        val user = SecurityContextHolder.getContext().authentication.principal as User

        mailService.send(
            mailType = request.mailType,
            recipient = user,
            attributes = request.attributes,
        )

        return SendMailResponse(message = "Mail sent to ${user.email}")
    }

    data class SendMailRequest(
        val mailType: MailType,
        val attributes: Map<String, String>,
    )

    data class SendMailResponse(val message: String)
}
