package com.yawa.server.api.users.creation

import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.notifications.MailService
import com.yawa.server.notifications.MailType
import com.yawa.server.security.tokens.ActionTokenService
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.util.*

private val log = KotlinLogging.logger {}

@RestController
class ActivateUser(
    @Autowired val actionTokenService: ActionTokenService,
    @Autowired val userService: UserService,
    @Autowired val mailService: MailService
) {

    @PostMapping("/users/{username}/activation")
    fun activateUser(@PathVariable username: String, @RequestBody request: ActivateUserRequest): ActivateUserResponse {
        log.info("Processing request: $request")

        val grant = actionTokenService.consumeToken(
            token = request.token, action = TokenAction.ACTIVATE_USER, username = username)

        val user = userService.findUser(username = username)

        log.info("Action token accepted for user $username to execute action ${grant.action}")

        userService.enableUser(user = user)

        mailService.asyncSend(
            mailType = MailType.USER_CREATION_CONFIRMED,
            recipient = user,
            attributes = mapOf(
                "username" to user.username,
                "action" to "Login",
            )
        )

        return ActivateUserResponse(message = "Confirmed creation of user ${user.username}")
    }

    data class ActivateUserRequest(val token: String)

    data class ActivateUserResponse(val message: String)
}
