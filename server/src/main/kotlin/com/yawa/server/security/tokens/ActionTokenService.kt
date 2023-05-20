package com.yawa.server.security.tokens

import com.yawa.server.exceptions.BadTokenException
import com.yawa.server.models.tokens.ActionToken
import com.yawa.server.models.tokens.ConfirmationTokenGrant
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.models.users.User
import com.yawa.server.notifications.MailService
import com.yawa.server.security.encryption.JwtService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.Instant
import java.time.temporal.ChronoUnit

@Service
class ActionTokenService(
    @Autowired val jwtService: JwtService,
    @Autowired val mailService: MailService
) {

    fun generateToken(user: User, action: TokenAction): ActionToken {
        val expiration = Instant.now().plus(1, ChronoUnit.DAYS)
        val token = jwtService.issue(
            attributes = mapOf(
                TokenField.USERNAME.name to user.username,
                TokenField.ACTION.name to action.name
            ),
            expiration = expiration
        )
        return ActionToken(
            token = token,
            action = action,
            expiration = expiration
        )
    }

    fun consumeToken(token: String, action: TokenAction): ConfirmationTokenGrant {
        val jwt = jwtService.decode(token)
        val username = jwt.getClaim(TokenField.USERNAME.name).asString()
        val grantedAction = TokenAction.valueOf(jwt.getClaim(TokenField.ACTION.name).asString())
        grantedAction.takeIf { it == action } ?: throw BadTokenException("Cannot consume token for action: $action")
        val expiration = jwt.expiresAtAsInstant

        return ConfirmationTokenGrant(
            username = username,
            action = action,
            expiration = expiration
        )
    }
}
