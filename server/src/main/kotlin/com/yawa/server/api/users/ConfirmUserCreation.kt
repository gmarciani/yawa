package com.yawa.server.api.users

import com.yawa.server.events.UserCreationConfirmedEvent
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.User
import com.yawa.server.repositories.ConfirmationTokenRepository
import com.yawa.server.repositories.UserRepository
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
class ConfirmUserCreation(
    @Autowired val confirmationTokenRepository: ConfirmationTokenRepository,
    @Autowired val userRepository: UserRepository,
    @Autowired val applicationEventPublisher: ApplicationEventPublisher
) {

    @PostMapping("/ConfirmUserCreation")
    fun confirmUserCreation(@Valid @RequestBody request: Request, authentication: Authentication?) : Response{
        log.info("Called with request: $request")

        val loggedUser = authentication?.principal as User

        val tokenId = request.tokenId

        val token = confirmationTokenRepository.findByIdAndUser(id = tokenId, user = loggedUser).orElseThrow {
            ResourceNotFoundException("Confirmation token not found: $tokenId")
        }

        val user = token.user

        user.isEnabled = true

        userRepository.save(user)
        confirmationTokenRepository.delete(token)

        applicationEventPublisher.publishEvent(UserCreationConfirmedEvent(user = user))

        return Response(message = "User creation confirmed for ${user.username}")
    }

    data class Request(val tokenId: Long)

    data class Response(val message: String)
}
