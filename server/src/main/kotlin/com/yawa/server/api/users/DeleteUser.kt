package com.yawa.server.api.users

import com.yawa.server.components.security.throttling.ThrottlingService
import com.yawa.server.events.UserDeletedEvent
import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserRole
import com.yawa.server.repositories.UserRepository
import com.yawa.server.validators.Username
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationEventPublisher
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class DeleteUser(
    @Autowired val userRepository: UserRepository,
    @Autowired val throttlingService: ThrottlingService,
    @Autowired val applicationEventPublisher: ApplicationEventPublisher
) {

    @DeleteMapping("/DeleteUser")
    fun deleteUsers(@Valid @RequestBody request: DeleteUserRequest, authentication: Authentication): DeleteUserResponse {
        log.info("Called with request: $request")

        authorizeRequest(request = request, authentication = authentication)

        val username = request.username

        val user = userRepository.findById(username).orElseThrow { ResourceNotFoundException("User not found: $username") }
        userRepository.delete(user)
        throttlingService.deleteIfExists(username)

        applicationEventPublisher.publishEvent(UserDeletedEvent(user = user))

        return DeleteUserResponse(user = user)
    }

    data class DeleteUserRequest(@Username val username: String)

    data class DeleteUserResponse(val user: User)

    private fun authorizeRequest(request: DeleteUserRequest, authentication: Authentication) {
        val identity = authentication.principal as User

        val username = request.username

        if (username != identity.username && UserRole.ADMIN != identity.role) {
            throw NotAuthorizedException("User with identity ${identity.username} cannot delete user ${username}")
        }
    }
}
