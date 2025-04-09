package com.yawa.server.security.tokens

import com.yawa.server.exceptions.BadTokenException
import com.yawa.server.models.tokens.ActionToken
import com.yawa.server.models.tokens.ConfirmationTokenGrant
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.models.users.User
import com.yawa.server.security.encryption.JwtService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.Instant
import java.time.temporal.ChronoUnit
import java.util.UUID

@Service
class ActionTokenService(
    @Autowired val jwtService: JwtService,
) {

    fun generateToken(user: User, action: TokenAction): ActionToken {
        val expiration = Instant.now().plus(1, ChronoUnit.DAYS)
        val token = jwtService.issue(
            attributes = mapOf(
                TokenField.USERID.name to user.id.toString(),
                TokenField.ACTION.name to action.name,
            ),
            expiration = expiration,
        )
        return ActionToken(
            token = token,
            action = action,
            expiration = expiration,
        )
    }

    fun consumeToken(token: String, action: TokenAction, userId: UUID? = null): ConfirmationTokenGrant {
        val jwt = jwtService.decode(token)
        val grantedUserId = UUID.fromString(jwt.getClaim(TokenField.USERID.name).asString())
        val grantedAction = TokenAction.valueOf(jwt.getClaim(TokenField.ACTION.name).asString())
        grantedAction.takeIf { it == action } ?: throw BadTokenException("Cannot consume token for action: $action")
        val expiration = jwt.expiresAtAsInstant

        if (userId != null) {
            grantedUserId.takeIf { it == userId } ?: throw BadTokenException("Cannot consume token for user: $userId")
        }

        return ConfirmationTokenGrant(
            userId = grantedUserId,
            action = grantedAction,
            expiration = expiration,
        )
    }
}
