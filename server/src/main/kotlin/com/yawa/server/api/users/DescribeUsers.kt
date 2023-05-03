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
    fun describeUsers(@Valid @RequestBody request: DescribeUsersRequest, authentication: Authentication) : DescribeUsersResponse {
        log.info("Called with request: $request")

        authorizeRequest(request = request, authentication = authentication)

        val username = request.username

        val user = userRepository.findById(username).orElseThrow {
            ResourceNotFoundException("User not found: $username")
        }

        return DescribeUsersResponse(user = user)
    }

    data class DescribeUsersRequest(@Username val username: String)

    data class DescribeUsersResponse(val user: User)

    private fun authorizeRequest(request: DescribeUsersRequest, authentication: Authentication) {
        val identity = authentication.principal as User

        val username = request.username

        if (username != identity.username && UserRole.ADMIN != identity.role) {
            throw NotAuthorizedException("User with identity ${identity.username} cannot describe user ${username}")
        }
    }
}
