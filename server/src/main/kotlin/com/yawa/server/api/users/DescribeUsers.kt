package com.yawa.server.api.users

import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserRole
import com.yawa.server.repositories.UserRepository
import com.yawa.server.validators.Username
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class DescribeUsers(
    @Autowired val userRepository: UserRepository
) {

    @GetMapping("/DescribeUsers")
    fun action(@Valid @RequestBody request: Request, authentication: Authentication) : Response {
        log.info("Called with request: $request")

        val username = request.username

        val identity = authentication.principal as User

        if (UserRole.ADMIN.toAuthority() !in identity.authorities && username != identity.username) {
            throw NotAuthorizedException("User with identity ${identity.username} cannot describe user $username")
        }

        val user = userRepository.findById(username).orElseThrow{ ResourceNotFoundException("User not found: $username") }

        return Response(user = user)
    }

    data class Request(@Username val username: String)

    data class Response(val user: User)
}