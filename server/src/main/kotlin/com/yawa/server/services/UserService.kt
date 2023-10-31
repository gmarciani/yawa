package com.yawa.server.services

import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserRole
import com.yawa.server.models.users.UserSubscriptionPlan
import com.yawa.server.repositories.UserRepository
import com.yawa.server.security.throttling.ThrottlingService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.util.StringUtils
import org.springframework.web.multipart.MultipartFile
import java.time.Instant
import java.util.*

private val log = KotlinLogging.logger {}
@Service
class UserService(
    @Autowired val userRepository: UserRepository,
    @Autowired val passwordEncoder: PasswordEncoder,
    @Autowired val throttlingService: ThrottlingService,
    @Autowired val fileSystemService: FileSystemService,
) {

    fun createUser(username: String, password: String, email: String): User {
        val user = User(
            username = username,
            password = passwordEncoder.encode(password),
            email = email,
            role = UserRole.NORMAL,
            subscriptionPlan = UserSubscriptionPlan.FREE,
            isEnabled = false,
            createdAt = Instant.now(),
        )
        userRepository.save(user)
        return user
    }

    fun findUser(username: String): User {
        return userRepository.findByUsername(username).orElseThrow {
            ResourceNotFoundException("User not found: $username")
        }
    }

    fun enableUser(user: User) {
        user.isEnabled = true
        userRepository.save(user)
    }

    fun deleteUser(user: User) {
        userRepository.delete(user)
        throttlingService.deleteIfExists(user.username)
    }

    fun existsUser(username: String): Boolean {
        return userRepository.existsByUsername(username)
    }

    fun setUserPicture(username: String, file: MultipartFile) {
        val user = findUser(username)
        val path = "profiles/$username-${UUID.randomUUID()}.${StringUtils.getFilenameExtension(file.originalFilename)}"
        val absolutePath = fileSystemService.savePublicFile(path = path, content = file.bytes)
        user.profile.picture = fileSystemService.getPathRelativeToRootDir(path = absolutePath).toString()
        userRepository.save(user)
    }

    fun deleteUserPicture(username: String) {
        val user = findUser(username)
        val path = user.profile.picture ?: return
        user.profile.picture = null
        fileSystemService.deletePublicFile(path = path)
        userRepository.save(user)
    }

    fun createAdminUser() {
        val username = "admin"
        val user = User(
            username = username,
            password = passwordEncoder.encode("P@ssw0rd-$username"),
            email = "giacomo.marciani+$username@gmail.com",
            role = UserRole.ADMIN,
            subscriptionPlan = UserSubscriptionPlan.SYSTEM,
            isEnabled = true,
            createdAt = Instant.now(),
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
            isEnabled = true,
            createdAt = Instant.now(),
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
            isEnabled = true,
            createdAt = Instant.now(),
        )
        this.createIfNotExists(user)
    }

    private fun createIfNotExists(user: User) {
        if (userRepository.existsByUsername(user.username)) {
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
