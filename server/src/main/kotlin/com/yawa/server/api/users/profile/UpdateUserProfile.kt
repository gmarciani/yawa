package com.yawa.server.api.users.profile

import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.Gender
import com.yawa.server.models.users.UserProfile
import com.yawa.server.repositories.UserProfileRepository
import com.yawa.server.repositories.UserRepository
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.Instant

private val log = KotlinLogging.logger {}

@RestController
class UpdateUserProfile(
    @Autowired val userRepository: UserRepository,
    @Autowired val userProfileRepository: UserProfileRepository
) {

    @PatchMapping("/users/{username}/profile")
    @PreAuthorize("authentication.principal.username == #username || hasRole('ROLE_ADMIN')")
    fun updateUserProfile(@PathVariable username: String, @Valid @RequestBody request: UpdateUserProfileRequest): UpdateUserProfileResponse {
        log.info("Processing request: $request")

        val user = userRepository.findByUsername(username).orElseThrow {
            ResourceNotFoundException("User not found: $username")
        }

        val updatedProfile = user.profile.also { profile ->
            request.firstname?.let { profile.firstname = it }
            request.lastname?.let { profile.lastname = it }
            request.gender?.let { profile.gender = it }
            request.dateOfBirth?.let { profile.dateOfBirth = it }
        }

        userProfileRepository.save(updatedProfile)

        return UpdateUserProfileResponse(profile = updatedProfile)
    }

    data class UpdateUserProfileRequest(
        val firstname: String?,
        val lastname: String?,
        val gender: Gender?,
        val dateOfBirth: Instant?,
    )

    data class UpdateUserProfileResponse(val profile: UserProfile)
}
