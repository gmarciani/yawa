package com.yawa.server.api.users

import com.yawa.server.events.UserCreationConfirmedEvent
import com.yawa.server.exceptions.ResourceExpiredException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.repositories.ConfirmationTokenRepository
import com.yawa.server.repositories.UserRepository
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationEventPublisher
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.util.*
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class ConfirmUserCreation(
    @Autowired val confirmationTokenRepository: ConfirmationTokenRepository,
    @Autowired val userRepository: UserRepository,
    @Autowired val applicationEventPublisher: ApplicationEventPublisher
) {

    @PostMapping("/ConfirmUserCreation")
    fun confirmUserCreation(@Valid @RequestBody request: ConfirmUserCreationRequest, authentication: Authentication?): ConfirmUserCreationResponse{
        log.info("Called with request: $request")

        val tokenId = request.tokenId

        val token = confirmationTokenRepository.findById(tokenId).orElseThrow {
            ResourceNotFoundException("Confirmation token not found: $tokenId")
        }

        if (!token.isValid()) {
            log.warn("Confirmation token expired: ${token.id}")
            throw ResourceExpiredException("Confirmation token expired: ${token.id}")
        }

        val user = token.user

        user.isEnabled = true

        userRepository.save(user)
        confirmationTokenRepository.delete(token)

        applicationEventPublisher.publishEvent(UserCreationConfirmedEvent(user = user))

        return ConfirmUserCreationResponse(message = "User creation confirmed for ${user.username}")
    }

    data class ConfirmUserCreationRequest(val tokenId: UUID)

    data class ConfirmUserCreationResponse(val message: String)
}
