package com.yawa.server.api.users

import com.yawa.server.models.users.User
import com.yawa.server.repositories.UserRepository
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class ListUsers(
    @Autowired val userRepository: UserRepository
) {

    @GetMapping("/ListUsers")
    fun listUsers(@Valid @RequestBody request: Request) : Response {
        log.info("Called with request: $request")

        val users = mutableListOf<User>()
        userRepository.findAll().forEach { users.add(it) }

        return Response(users = users)
    }

    data class Request(val filter: String?)

    data class Response(val users: List<User>)
}
