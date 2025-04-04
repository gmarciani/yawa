package com.yawa.server.api.users.profile.picture

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.models.users.User
import com.yawa.server.services.UserService
import io.swagger.v3.oas.annotations.Operation
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class DeleteUserPicture(
    @Autowired val userService: UserService,
) {

    @Operation(tags = [USERS])
    @DeleteMapping("/users/me/profile/picture", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun deleteUserPicture(): DeleteUserPictureResponse {
        log.info("Processing request")

        val user = SecurityContextHolder.getContext().authentication.principal as User

        userService.deleteUserPicture(userId = user.id!!)

        return DeleteUserPictureResponse(message = "User picture deleted")
    }

    data class DeleteUserPictureResponse(val message: String)
}
