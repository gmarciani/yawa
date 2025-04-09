package com.yawa.server.api.users.profile

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserPrincipal
import com.yawa.server.models.users.UserProfile
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class GetUserProfile(
    @Autowired val userService: UserService,
) {

    @Operation(tags = [USERS])
    @GetMapping("/users/me/profile", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getUserProfile(
        @AuthenticationPrincipal user: User,
    ): DescribeUserProfileResponse {
        log.info("Processing request for user ${user.id}")

        return DescribeUserProfileResponse(profile = user.profile!!)
    }

    data class DescribeUserProfileResponse(val profile: UserProfile)
}
