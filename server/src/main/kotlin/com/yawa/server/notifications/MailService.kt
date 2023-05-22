package com.yawa.server.notifications

import com.yawa.server.exceptions.MailServiceExcpetion
import com.yawa.server.models.users.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.stereotype.Service
import org.thymeleaf.exceptions.TemplateEngineException


@Service
class MailService(
    @Autowired val mailSender: JavaMailSender,
    @Autowired val templateEngine: MailTemplateService
) {
    fun send(mailType: MailType, recipient: User, attributes: Map<String, String>) {
        val body = try {
            mailType.body(templateEngine = templateEngine, attributes = attributes)
        } catch (ex: TemplateEngineException) {
            throw MailServiceExcpetion(
                "Could not send email $mailType to ${recipient.username}: ${ex.message}")
        }
        this.send(
            recipient = recipient,
            subject = mailType.subject(),
            body = body
        )
    }

    private fun send(recipient: User, subject: String, body: String) {
        this.send(recipient = recipient.email, subject = subject, body = body)
    }

    private fun send(recipient: String, subject: String, body: String) {
        val message = mailSender.createMimeMessage()
        MimeMessageHelper(message, true).also {
            it.setTo(recipient)
            it.setSubject(subject)
            it.setText(body, true)
        }
        mailSender.send(message)
    }
}
