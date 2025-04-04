package com.yawa.server.api.users.profile.picture

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.models.users.User
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

private val log = KotlinLogging.logger {}

@RestController
class UpdateUserPicture(
    @Autowired val userService: UserService,
) {

    @Operation(tags = [USERS])
    @PatchMapping("/users/me/profile/picture", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun updateUserPicture(
        @ModelAttribute request: UpdateUserPictureRequest,
    ): UpdateUserPictureResponse {
        log.info("Processing request: $request")

        val user = SecurityContextHolder.getContext().authentication.principal as User

        userService.setUserPicture(userId = user.id!!, file = request.file)

        return UpdateUserPictureResponse(message = "User picture updated")
    }

    data class UpdateUserPictureRequest(
        val file: MultipartFile,
    )

    data class UpdateUserPictureResponse(val message: String)
}
