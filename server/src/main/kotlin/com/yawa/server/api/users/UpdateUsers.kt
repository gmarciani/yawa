package com.yawa.server.api.users

import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserRole
import com.yawa.server.repositories.UserRepository
import com.yawa.server.validators.Email
import com.yawa.server.validators.Password
import com.yawa.server.validators.Role
import com.yawa.server.validators.Username
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class UpdateUsers(
    @Autowired val userRepository: UserRepository,
    @Autowired val passwordEncoder: PasswordEncoder
) {

    @PatchMapping("/UpdateUsers")
    fun action(@Valid @RequestBody request: Request, authentication: Authentication) : Response {
        log.info("Called with request: $request")

        val username = request.username

        val identity = authentication.principal as User

        if (UserRole.ADMIN.toAuthority() !in identity.authorities && username != identity.username) {
            throw NotAuthorizedException("User with identity ${identity.username} cannot update user $username")
        }

        if (UserRole.ADMIN.toAuthority() !in identity.authorities && request.role != null) {
            throw NotAuthorizedException("User with identity ${identity.username} cannot update role for user $username")
        }

        val user = userRepository.findById(username).orElseThrow{ ResourceNotFoundException("User not found: $username") } as User
        request.password?.let { user.password = passwordEncoder.encode(it) }
        request.email?.let { user.email = it }
        //TODO Must restrict the possibility to create users with role different from Normal
        request.role?.let { user.setAuthoritiesForRole(UserRole.valueOf(it)) }

        userRepository.save(user)

        return Response(user = user)
    }

    data class Request(
        @Username val username: String,
        @Password val password: String?,
        @Role val role: String?,
        @Email val email: String?
    )

    data class Response(val user: User)
}
