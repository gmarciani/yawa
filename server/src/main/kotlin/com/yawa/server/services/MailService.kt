package com.yawa.server.services

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Service


@Service
class MailService(
    @Autowired val mailSender: JavaMailSender
) {

    fun send(recipient: String, subject: String, body: String) {
        val message = SimpleMailMessage()
        message.setTo(recipient)
        message.subject = subject
        message.text = body
        mailSender.send(message)
    }
}
