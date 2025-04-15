package com.yawa.server.api.users.profile.picture

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserPrincipal
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

private val log = KotlinLogging.logger {}

@RestController
class UpdateUserPicture(
    @Autowired val userService: UserService,
) {

    @Operation(tags = [USERS])
    @PatchMapping("/users/me/profile/picture",
        produces = [MediaType.APPLICATION_JSON_VALUE],
        consumes = [MediaType.MULTIPART_FORM_DATA_VALUE])
    fun updateUserPicture(
        @AuthenticationPrincipal user: User,
        @ModelAttribute request: UpdateUserPictureRequest,
    ): UpdateUserPictureResponse {
        log.info("Processing request for user ${user.id}: ${request.file.originalFilename}")

        val path = userService.setUserPicture(userId = user.id!!, file = request.file)

        return UpdateUserPictureResponse(message = "User picture updated", path = path)
    }

    // Setting @RequestPart is required on data class having single attributes
    // to make Jackson serialization/deserialization work.
    data class UpdateUserPictureRequest(
        @RequestPart("file")
        val file: MultipartFile,
    )

    data class UpdateUserPictureResponse(
        val message: String,
        val path: String,
    )
}
