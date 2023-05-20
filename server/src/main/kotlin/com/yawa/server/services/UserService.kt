package com.yawa.server.services

import com.yawa.server.components.security.throttling.ThrottlingService
import com.yawa.server.exceptions.ResourceNotFoundException
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
    @Autowired val passwordEncoder: PasswordEncoder,
    @Autowired val throttlingService: ThrottlingService
) {

    fun createUser(username: String, password: String, email: String): User {
        val user = User(
            username = username,
            password = passwordEncoder.encode(password),
            email = email,
            role = UserRole.NORMAL,
            subscriptionPlan = UserSubscriptionPlan.FREE,
            isEnabled = false
        )
        userRepository.save(user)
        return user
    }

    fun findUser(username: String): User {
        return userRepository.findById(username).orElseThrow {
            ResourceNotFoundException("User not found: $username")
        }
    }

    fun enableUser(user: User) {
        user.isEnabled = true
        userRepository.save(user)
    }

    fun deleteUser(user: User) {
        userRepository.delete(user)
    }

    fun existsUser(username: String): Boolean {
        return userRepository.existsById(username)
    }

    fun createAdminUser() {
        val username = "admin"
        val user = User(
            username = username,
            password = passwordEncoder.encode("P@ssw0rd-$username"),
            email = "giacomo.marciani+$username@gmail.com",
            role = UserRole.ADMIN,
            subscriptionPlan = UserSubscriptionPlan.SYSTEM,
            isEnabled = true
        )
        this.createIfNotExists(user)
    }

    fun createPrometheusUser() {
        val username = "prometheus"
        val user = User(
            username = username,
            password = passwordEncoder.encode("P@ssw0rd-$username"),
            email = "giacomo.marciani+$username@gmail.com",
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
            email = "giacomo.marciani+$username@gmail.com",
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

    fun setPassword(user: User, password: String) {
        user.password = passwordEncoder.encode(password)
        userRepository.save(user)
    }
}
