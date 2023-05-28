package com.yawa.server.api.users.settings

import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.UserSettings
import com.yawa.server.repositories.UserRepository
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class DescribeUserSettings(
    @Autowired val userRepository: UserRepository
) {

    @GetMapping("/DescribeUserSettings/{username}")
    @PreAuthorize("authentication.principal.username == #username || hasRole('ROLE_ADMIN')")
    fun describeUserSettings(@PathVariable username: String): DescribeUserSettingsResponse {

        val user = userRepository.findByUsername(username).orElseThrow {
            ResourceNotFoundException("User not found: $username")
        }

        return DescribeUserSettingsResponse(settings = user.settings)
    }

    data class DescribeUserSettingsResponse(val settings: UserSettings)
}
