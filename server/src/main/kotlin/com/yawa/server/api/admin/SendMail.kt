package com.yawa.server.api.admin

import com.yawa.server.exceptions.YawaInternalException
import com.yawa.server.models.users.User
import com.yawa.server.services.MailService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

private val log = KotlinLogging.logger {}
@RestController
class SendMail(
    @Autowired val mailService: MailService
) {

    @PostMapping("/admin/SendMail")
    fun sendMail(@Valid @RequestBody request: SendMailRequest): SendMailResponse {
        val user = SecurityContextHolder.getContext().authentication.principal as User

        when (val mailType = request.mailType) {
            MailType.TEST_PLAIN -> {
                mailService.send(
                    recipient = user.email,
                    subject = "YAWA TEST",
                    body = "Hello World!"
                )
            }
            else -> {
                log.error("Cannot send email with type $mailType")
                throw YawaInternalException("Cannot send email with type $mailType")
            }
        }

        return SendMailResponse(message = "Mail sent to ${user.email}")
    }

    data class SendMailRequest(
        val mailType: MailType,
    )

    data class SendMailResponse(val message: String)

    enum class MailType {
        TEST_PLAIN, TEST_TEMPLATE, TEST_TEMPLATE_HTML
    }
}
