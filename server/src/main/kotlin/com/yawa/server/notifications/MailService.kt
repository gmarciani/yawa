package com.yawa.server.notifications

import com.yawa.server.models.users.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Service


@Service
class MailService(
    @Autowired val mailSender: JavaMailSender
) {
    fun send(mailType: MailType, recipient: User, attributes: Map<String, String>) {
        this.send(
            recipient = recipient,
            subject = mailType.subject(attributes = attributes),
            body = mailType.body(attributes = attributes)
        )
    }

    fun send(recipient: User, subject: String, body: String) {
        this.send(recipient = recipient.email, subject = subject, body = body)
    }

    fun send(recipient: String, subject: String, body: String) {
        val message = SimpleMailMessage()
        message.setTo(recipient)
        message.subject = subject
        message.text = body
        mailSender.send(message)
    }
}
