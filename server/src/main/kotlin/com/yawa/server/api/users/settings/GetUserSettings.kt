package com.yawa.server.api.users.settings

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserPrincipal
import com.yawa.server.models.users.UserSettings
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class GetUserSettings(
    @Autowired val userService: UserService,
) {

    @Operation(tags = [USERS])
    @GetMapping("/users/me/settings", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getUserSettings(
        @AuthenticationPrincipal user: User,
    ): DescribeUserSettingsResponse {
        log.info("Processing request for user ${user.id}")

        return DescribeUserSettingsResponse(settings = user.settings!!)
    }

    data class DescribeUserSettingsResponse(val settings: UserSettings)
}
