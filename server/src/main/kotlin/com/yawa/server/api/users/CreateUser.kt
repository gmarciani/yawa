package com.yawa.server.api.users

import com.yawa.server.events.users.creation.UserCreationRequestedEvent
import com.yawa.server.exceptions.DuplicatedResourceException
import com.yawa.server.models.users.User
import com.yawa.server.repositories.UserRepository
import com.yawa.server.services.UserService
import com.yawa.server.validators.Email
import com.yawa.server.validators.Password
import com.yawa.server.validators.Username
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationEventPublisher
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class CreateUser(
    @Autowired val userService: UserService,
    @Autowired val userRepository: UserRepository,
    @Autowired val applicationEventPublisher: ApplicationEventPublisher
) {

    @PostMapping("/CreateUser")
    fun createUser(@Valid @RequestBody request: CreateUserRequest, authentication: Authentication?): CreateUserResponse {
        log.info("Processing request: $request")

        if (userRepository.existsById(request.username)) {
            throw DuplicatedResourceException("User already exists: ${request.username}")
        }

        val user = userService.createUser(
            username = request.username,
            password = request.password,
            email = request.email
        )

        applicationEventPublisher.publishEvent(UserCreationRequestedEvent(user = user))

        return CreateUserResponse(user = user)
    }

    data class CreateUserRequest(
        @Username val username: String,
        @Password val password: String,
        @Email val email: String,
    )

    data class CreateUserResponse(val user: User)
}
