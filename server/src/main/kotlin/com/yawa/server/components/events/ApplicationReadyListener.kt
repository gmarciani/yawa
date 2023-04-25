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
        log.info("LIFECYCLE: Application ready")

        this.createAdminUser()
        this.createPrometheusUser()
        this.createTestUser()
    }

    private fun createAdminUser() {
        val username = "admin"

        if (!userRepository.existsById(username)) {
            log.info("Creating user: $username")
            val user = User(
                username = username,
                password = passwordEncoder.encode("P@ssw0rd-ADMIN"),
                email = "yawa.admin@gmail.com",
                role = UserRole.ADMIN
            )
            userRepository.save(user)
        }
    }

    private fun createPrometheusUser() {
        val username = "prometheus"

        if (!userRepository.existsById(username)) {
            log.info("Creating user: $username")
            val user = User(
                username = username,
                password = passwordEncoder.encode("P@ssw0rd-PROMETHEUS"),
                email = "yawa.prometheus@gmail.com",
                role = UserRole.PROMETHEUS
            )
            userRepository.save(user)
        }
    }

    private fun createTestUser() {
        val username = "test-user"

        if (!userRepository.existsById(username)) {
            log.info("Creating user: $username")
            val user = User(
                username = username,
                password = passwordEncoder.encode("P@ssw0rd-TEST-USER"),
                email = "yawa.test-user@gmail.com",
                role = UserRole.NORMAL
            )
            userRepository.save(user)
        }
    }
}
