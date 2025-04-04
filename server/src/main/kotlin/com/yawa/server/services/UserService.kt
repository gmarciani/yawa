package com.yawa.server.services

import com.yawa.server.datastore.repositories.UserProfileRepository
import com.yawa.server.datastore.repositories.UserRepository
import com.yawa.server.datastore.repositories.UserSettingsRepository
import com.yawa.server.exceptions.DuplicatedResourceException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.Gender
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserProfile
import com.yawa.server.models.users.UserRole
import com.yawa.server.models.users.UserSettings
import com.yawa.server.models.users.UserSubscriptionPlan
import com.yawa.server.security.encryption.PasswordEncodeService
import com.yawa.server.security.throttling.ThrottlingService
import com.yawa.server.utils.TimeUtils
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.util.StringUtils
import org.springframework.web.multipart.MultipartFile
import java.time.Instant
import java.util.UUID

private val log = KotlinLogging.logger {}

@Service
class UserService(
    @Autowired val userRepository: UserRepository,
    @Autowired val userProfileRepository: UserProfileRepository,
    @Autowired val userSettingsRepository: UserSettingsRepository,
    @Autowired val passwordEncoder: PasswordEncodeService,
    @Autowired val throttlingService: ThrottlingService,
    @Autowired val fileSystemService: FileSystemService,
) {

    fun createUser(email: String, password: String, firstname: String, lastname: String): User {
        if (userRepository.existsByEmail(email)) {
            throw DuplicatedResourceException("Email already in use: $email")
        }

        val user = userRepository.save(
            User(
                email = email,
                password = passwordEncoder.encode(password),
                role = UserRole.NORMAL,
                subscriptionPlan = UserSubscriptionPlan.FREE,
                isEnabled = false,
                createdAt = Instant.now(),
            ),
        )

        userProfileRepository.save(
            UserProfile(
                user = user,
                firstname = firstname,
                lastname = lastname,
            ),
        )

        userSettingsRepository.save(
            UserSettings(user = user),
        )

        return user
    }

    fun findUser(userId: UUID): User {
        return userRepository.findById(userId).orElseThrow {
            ResourceNotFoundException("User not found: $userId")
        }
    }

    fun findUserProfile(userId: UUID): UserProfile {
        return userProfileRepository.findById(userId).orElseThrow {
            ResourceNotFoundException("User profile not found: $userId")
        }
    }

    fun findUserByEmail(email: String): User {
        return userRepository.findByEmail(email).orElseThrow {
            ResourceNotFoundException("User not found for email: $email")
        }
    }

    fun enableUser(user: User) {
        user.isEnabled = true
        userRepository.save(user)
    }

    fun deleteUser(user: User) {
        userRepository.delete(user)
        throttlingService.deleteIfExists(user.id!!)
    }

    fun setUserPicture(userId: UUID, file: MultipartFile) {
        val profile = findUserProfile(userId)
        val path = "profiles/$userId-${UUID.randomUUID()}.${StringUtils.getFilenameExtension(file.originalFilename)}"
        val absolutePath = fileSystemService.savePublicFile(path = path, content = file.bytes)
        profile.picture = fileSystemService.getPathRelativeToRootDir(path = absolutePath).toString()
        userProfileRepository.save(profile)
    }

    fun deleteUserPicture(userId: UUID) {
        val profile = findUserProfile(userId)
        val path = profile.picture ?: return
        profile.picture = null
        fileSystemService.deletePublicFile(path = path)
        userProfileRepository.save(profile)
    }

    fun createAdminUser() {
        val user = User(
            email = "giacomo.marciani+yawa-admin@gmail.com",
            password = passwordEncoder.encode("password"),
            role = UserRole.ADMIN,
            subscriptionPlan = UserSubscriptionPlan.SYSTEM,
            isEnabled = true,
            createdAt = Instant.now(),
        )
        this.createSystemUser(user)
    }

    fun createPrometheusUser() {
        val user = User(
            email = "giacomo.marciani+yawa-prometheus@gmail.com",
            password = passwordEncoder.encode("password"),
            role = UserRole.PROMETHEUS,
            subscriptionPlan = UserSubscriptionPlan.SYSTEM,
            isEnabled = true,
            createdAt = Instant.now(),
        )
        this.createSystemUser(user)
    }

    fun createTestUser(role: UserRole, userSubscriptionPlan: UserSubscriptionPlan) {
        val username = "test-${role.name.lowercase()}-${userSubscriptionPlan.name.lowercase()}"
        val user = User(
            email = "giacomo.marciani+yawa-$username@gmail.com",
            password = passwordEncoder.encode("password"),
            role = role,
            subscriptionPlan = userSubscriptionPlan,
            isEnabled = true,
            createdAt = Instant.now(),
        )
        createSystemUser(user)
    }

    fun createSystemUser(user: User) {
        if (userRepository.existsByEmail(user.email)) {
            log.info("Skipped creation of user ${user.email} because it already exists")
            return
        }
        user.profile = UserProfile(
            user = user,
            firstname = "Giacomo",
            lastname = "Marciani",
            gender = Gender.MALE,
            dateOfBirth = TimeUtils.dateToInstant(1990, 6, 27),
            picture = "assets/media/avatars/system-user.png",

        )
        user.settings = UserSettings(user = user)
        userRepository.save(user)
        log.info("User created: ${user.id}")
    }

    fun setPassword(user: User, password: String) {
        user.password = passwordEncoder.encode(password)
        userRepository.save(user)
    }
}
