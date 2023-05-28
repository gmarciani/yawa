package com.yawa.server.api.users.profile

import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.UserProfile
import com.yawa.server.repositories.UserRepository
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class DescribeUserProfile(
    @Autowired val userRepository: UserRepository
) {

    @GetMapping("/DescribeUserProfile/{username}")
    fun describeUserProfile(@PathVariable username: String): DescribeUserProfileResponse {
        log.info("Processing request for user $username")

        val user = userRepository.findByUsername(username).orElseThrow {
            ResourceNotFoundException("User not found: $username")
        }

        return DescribeUserProfileResponse(profile = user.profile)
    }

    data class DescribeUserProfileResponse(val profile: UserProfile)
}
