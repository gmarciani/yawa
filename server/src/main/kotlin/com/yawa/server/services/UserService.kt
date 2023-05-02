package com.yawa.server.services

import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserRole
import com.yawa.server.models.users.UserSubscriptionPlan
import com.yawa.server.repositories.UserRepository
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

private val log = KotlinLogging.logger {}
@Service
class UserService(
    @Autowired val userRepository: UserRepository,
    @Autowired val passwordEncoder: PasswordEncoder
) {

    fun createAdminUser() {
        val user = User(
            username = "admin",
            password = passwordEncoder.encode("P@ssw0rd-ADMIN"),
            email = "giacomo.marciani@gmail.com",
            role = UserRole.ADMIN,
            subscriptionPlan = UserSubscriptionPlan.SYSTEM,
            isEnabled = true
        )
        this.createIfNotExists(user)
    }

    fun createPrometheusUser() {
        val user = User(
            username = "prometheus",
            password = passwordEncoder.encode("P@ssw0rd-PROMETHEUS"),
            email = "prometheus@yawa.com",
            role = UserRole.PROMETHEUS,
            subscriptionPlan = UserSubscriptionPlan.SYSTEM,
            isEnabled = true
        )
        this.createIfNotExists(user)
    }

    fun createTestUser(role: UserRole, userSubscriptionPlan: UserSubscriptionPlan) {
        val username = "test-${role.name.lowercase()}-${userSubscriptionPlan.name.lowercase()}"
        val user = User(
            username = username,
            password = passwordEncoder.encode("P@ssw0rd-$username"),
            email = "$username@yawa.com",
            role = role,
            subscriptionPlan = userSubscriptionPlan,
            isEnabled = true
        )
        this.createIfNotExists(user)
    }

    private fun createIfNotExists(user: User) {
        if (userRepository.existsById(user.username)) {
            log.info("Skipped creation of user ${user.username} because it already exists")
            return
        }
        userRepository.save(user)
        log.info("User created: ${user.username}")
    }
}
