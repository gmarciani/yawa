package com.yawa.server.components.events

import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserRole
import com.yawa.server.repositories.UserRepository
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.event.EventListener
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class ApplicationReadyListener(
    @Autowired val userRepository: UserRepository,
    @Autowired val passwordEncoder: PasswordEncoder
) {

    @EventListener
    fun onEvent(event: ApplicationReadyEvent) {
        log.info("Application is ready")
        println("Application is ready")

        val adminUsername = "admin"

        if (!userRepository.existsById(adminUsername)) {
            log.info("Creating admin user")
            val user = User(
                username = adminUsername,
                password = passwordEncoder.encode("P@ssw0rd"),
                email = "giacomo.marciani@gmail.com",
                role = UserRole.ADMIN
            )
            userRepository.save(user)
        }
    }
}
