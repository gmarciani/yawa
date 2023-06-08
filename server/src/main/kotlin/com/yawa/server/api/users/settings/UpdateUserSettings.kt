package com.yawa.server.api.users.settings

import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.UserSettings
import com.yawa.server.repositories.UserRepository
import com.yawa.server.repositories.UserSettingsRepository
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class UpdateUserSettings(
    @Autowired val userRepository: UserRepository,
    @Autowired val userSettingsRepository: UserSettingsRepository,
) {

    @PatchMapping("/users/{username}/settings")
    @PreAuthorize("authentication.principal.username == #username || hasRole('ROLE_ADMIN')")
    fun updateUserSettings(@PathVariable username: String, @Valid @RequestBody request: UpdateUserSettingsRequest): UpdateUserSettingsResponse {
        log.info("Processing request: $request")

        val user = userRepository.findByUsername(username).orElseThrow {
            ResourceNotFoundException("User not found: $username")
        }

        val updatedSettings = user.settings.also { settings ->
            request.isMfaEnabled?.let { settings.isMfaEnabled = it }
        }

        userSettingsRepository.save(updatedSettings)

        return UpdateUserSettingsResponse(settings = updatedSettings)
    }

    data class UpdateUserSettingsRequest(val isMfaEnabled: Boolean?)

    data class UpdateUserSettingsResponse(val settings: UserSettings)
}
