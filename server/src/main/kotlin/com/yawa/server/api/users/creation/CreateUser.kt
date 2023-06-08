package com.yawa.server.api.users.creation

import com.yawa.server.exceptions.DuplicatedResourceException
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.repositories.UserRepository
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import com.yawa.server.validators.Email
import com.yawa.server.validators.Password
import com.yawa.server.validators.Username
import jakarta.validation.Valid
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
class CreateUser(
    @Autowired val userService: UserService,
    @Autowired val userRepository: UserRepository,
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val mailService: MailService
) {

    @PostMapping("/users")
    fun createUser(@Valid @RequestBody request: CreateUserRequest, authentication: Authentication?): CreateUserResponse {
        log.info("Processing request: $request")

        if (userRepository.existsByUsername(request.username)) {
            throw DuplicatedResourceException("User already exists: ${request.username}")
        }

        val user = userService.createUser(
            username = request.username,
            password = request.password,
            email = request.email
        )

        val actionToken = actionTokenService.generateToken(user = user, action = TokenAction.ACTIVATE_USER)

        mailService.asyncSend(
            mailType = MailType.USER_CREATION_PENDING,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "token" to actionToken.token,
                "action" to "ActivateUser",
                "expiration" to actionToken.expiration.toString()
            )
        )

        return CreateUserResponse(user = user)
    }

    data class CreateUserRequest(
        @Username val username: String,
        @Password val password: String,
        @Email val email: String,
    )

    data class CreateUserResponse(val user: User)
}
