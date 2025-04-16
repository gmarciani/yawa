package com.yawa.server.api.users.profile

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.datastore.repositories.UserProfileRepository
import com.yawa.server.models.users.*
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.Instant
import java.time.LocalDate

private val log = KotlinLogging.logger {}

@RestController
class UpdateUserProfile(
    @Autowired val userService: UserService,
    @Autowired val userProfileRepository: UserProfileRepository,
) {

    @Operation(tags = [USERS])
    @PatchMapping("/users/me/profile", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun updateUserProfile(
        @AuthenticationPrincipal user: User,
        @Valid @RequestBody request: UpdateUserProfileRequest,
    ): UpdateUserProfileResponse {
        log.info("Processing request for user ${user.id}: $request")

        val updatedProfile = user.profile!!.also { p: UserProfile ->
            request.firstname?.let { p.firstname = it }
            request.lastname?.let { p.lastname = it }
            request.gender?.let { p.gender = it }
            request.dateOfBirth?.let { p.dateOfBirth = it }
            request.phone?.let { p.phone = it }
            request.language?.let { p.language = it }
            request.location?.let { p.location = it }
            request.picture?.let { p.picture = it }
        }

        userProfileRepository.save(updatedProfile)

        return UpdateUserProfileResponse(profile = updatedProfile)
    }

    data class UpdateUserProfileRequest(
        val firstname: String?,
        val lastname: String?,
        val gender: Gender?,
        val dateOfBirth: LocalDate?,
        val phone: String?,
        val language: Language?,
        val location: String?,
        val picture: String?,
    )

    data class UpdateUserProfileResponse(val profile: UserProfile)
}
