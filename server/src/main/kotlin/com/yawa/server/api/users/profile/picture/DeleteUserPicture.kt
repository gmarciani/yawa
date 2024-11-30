package com.yawa.server.api.users.profile.picture

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class DeleteUserPicture(
    @Autowired val userService: UserService,
) {

    @Operation(tags = [USERS])
    @DeleteMapping("/users/{username}/profile/picture", produces = [MediaType.APPLICATION_JSON_VALUE])
    @PreAuthorize("authentication.principal.username == #username || hasRole('ROLE_ADMIN')")
    fun deleteUserPicture(
        @PathVariable username: String,
    ): DeleteUserPictureResponse {
        log.info("Processing request for user $username")

        userService.deleteUserPicture(username = username)

        return DeleteUserPictureResponse(message = "User picture deleted")
    }

    data class DeleteUserPictureResponse(val message: String)
}
