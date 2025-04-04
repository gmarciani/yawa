package com.yawa.server.api.users.creation

import com.yawa.server.constants.OpenApiTags.USERS
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import com.yawa.server.validators.Email
import com.yawa.server.validators.Password
import com.yawa.server.validators.RegularString
import io.swagger.v3.oas.annotations.Operation
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class CreateUser(
    @Autowired val userService: UserService,
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService,
) {

    @Operation(tags = [USERS])
    @PostMapping("/users", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun createUser(
        @Valid @RequestBody request: CreateUserRequest,
        authentication: Authentication?,
    ): CreateUserResponse {
        log.info("Processing request: $request")

        val user = userService.createUser(
            email = request.email,
            password = request.password,
            firstname = request.firstname,
            lastname = request.lastname,
        )

        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.ACTIVATE_USER)

        mailService.asyncSend(
            mailType = MailType.USER_CREATION_PENDING,
            recipient = user,
            attributes = mapOf(
                "firstname" to user.profile!!.firstname!!,
                "token" to actionToken.token,
                "action" to "ActivateUser",
                "expiration" to actionToken.expiration.toString(),
            ),
        )

        return CreateUserResponse(user = user)
    }

    data class CreateUserRequest(
        @Email val email: String,
        @Password val password: String,
        @RegularString val firstname: String,
        @RegularString val lastname: String,
    )

    data class CreateUserResponse(val user: User)
}
