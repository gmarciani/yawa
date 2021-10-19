package com.yawa.server.api.users

import com.yawa.server.exceptions.DuplicatedResourceException
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserRole
import com.yawa.server.repositories.UserRepository
import com.yawa.server.validators.Email
import com.yawa.server.validators.Password
import com.yawa.server.validators.Role
import com.yawa.server.validators.Username
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class CreateUsers(
    @Autowired val userRepository: UserRepository,
    @Autowired val passwordEncoder: PasswordEncoder
) {

    @PostMapping("/CreateUsers")
    fun action(@Valid @RequestBody request: Request) : Response{
        log.info("Called with request: $request")

        if (userRepository.existsById(request.username)) {
            throw DuplicatedResourceException("User already exists: ${request.username}")
        }

        val user = User(
            username = request.username,
            password = passwordEncoder.encode(request.password),
            email = request.email
        )
        //TODO Must restrict the possibility to create users with role different from Normal
        request.role?.let { user.setAuthoritiesForRole(UserRole.valueOf(it)) }
        userRepository.save(user)

        return Response(user = user)
    }

    data class Request(
        @Username val username: String,
        @Password val password: String,
        @Role val role: String?,
        @Email val email: String
    )

    data class Response(val user: User)
}
