package com.yawa.server.api.users.settings

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.datastore.repositories.UserSettingsRepository
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserPrincipal
import com.yawa.server.models.users.UserSettings
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

private val log = KotlinLogging.logger {}

@RestController
class UpdateUserSettings(
    @Autowired val userService: UserService,
    @Autowired val userSettingsRepository: UserSettingsRepository,
) {

    @Operation(tags = [USERS])
    @PatchMapping("/users/me/settings", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun updateUserSettings(
        @AuthenticationPrincipal user: User,
        @Valid @RequestBody request: UpdateUserSettingsRequest,
    ): UpdateUserSettingsResponse {
        log.info("Processing request for user ${user.id}")

        val updatedSettings = user.settings!!.also { s ->
            request.isMfaEnabled?.let { s.isMfaEnabled = it }
        }

        userSettingsRepository.save(updatedSettings)

        return UpdateUserSettingsResponse(settings = updatedSettings)
    }

    data class UpdateUserSettingsRequest(val isMfaEnabled: Boolean?)

    data class UpdateUserSettingsResponse(val settings: UserSettings)
}
