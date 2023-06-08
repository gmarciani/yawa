package com.yawa.server.api.users.profile.picture

import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

private val log = KotlinLogging.logger {}

@RestController
class UpdateUserPicture(
    @Autowired val userService: UserService,
) {

    @PatchMapping("/users/{username}/profile/picture")
    @PreAuthorize("authentication.principal.username == #username || hasRole('ROLE_ADMIN')")
    fun updateUserPicture(@PathVariable username: String, @ModelAttribute request: UpdateUserPictureRequest): UpdateUserPictureResponse {
        log.info("Processing request for user $username: $request")

        userService.setUserPicture(username = username, file = request.file)

        return UpdateUserPictureResponse(message = "User picture updated")
    }

    data class UpdateUserPictureRequest(
        val file: MultipartFile
    )

    data class UpdateUserPictureResponse(val message: String)
}
