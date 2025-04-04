package com.yawa.server.security.authentication

import com.auth0.jwt.interfaces.DecodedJWT
import com.yawa.server.datastore.repositories.UserRepository
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.exceptions.UserDisabledException
import com.yawa.server.models.tokens.AuthenticationTokens
import com.yawa.server.models.tokens.TokenAction
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserRole
import com.yawa.server.security.encryption.JwtService
import com.yawa.server.security.tokens.TokenField
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.DisabledException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.stereotype.Service
import java.time.Instant
import java.time.temporal.ChronoUnit
import java.util.UUID

@Service
class AuthenticationService(
    @Autowired val userRepository: UserRepository,
    @Autowired val jwtService: JwtService,
) {

    @Autowired @Lazy // Lazy initialization is required to avoid circular dependencies
    lateinit var authenticationManager: AuthenticationManager

    fun authenticate(email: String, password: String): User {
        val authenticationToken = UsernamePasswordAuthenticationToken(email, password)
        val principal = try {
            authenticationManager.authenticate(authenticationToken)
                .principal as com.yawa.server.models.users.UserPrincipal
        } catch (ex: DisabledException) {
            throw UserDisabledException("Cannot authenticate user $email because it is disabled")
        }
        return userRepository.findById(principal.id).orElseThrow {
            ResourceNotFoundException("Cannot find user associated to the provided access token")
        }
    }

    fun authenticateAccessToken(accessToken: String): User {
        val jwt = jwtService.decode(accessToken)
        val userId = UUID.fromString(jwt.getClaim(TokenField.USERID.name).asString())
        return userRepository.findById(userId).orElseThrow {
            ResourceNotFoundException("Cannot find user associated to the provided access token")
        }
    }

    fun authenticateRefreshToken(refreshToken: String): User {
        val jwt = jwtService.decode(refreshToken)
        val userId = UUID.fromString(jwt.getClaim(TokenField.USERID.name).asString())
        return userRepository.findById(userId).orElseThrow {
            ResourceNotFoundException("Cannot find user associated to the provided refresh token")
        }
    }

    fun generateAuthenticationTokens(user: User, neverExpire: Boolean = false): AuthenticationTokens {
        val now = Instant.now()
        val accessTokenExpiration = now.plus(if (neverExpire) 36500 else 1, ChronoUnit.DAYS)
        val refreshTokenExpiration = now.plus(if (neverExpire) 36500 else 1, ChronoUnit.DAYS)
        val accessToken = generateAccessToken(user, accessTokenExpiration)
        val refreshToken = generateRefreshToken(user, refreshTokenExpiration)
        return AuthenticationTokens(
            accessToken = accessToken,
            accessTokenExpiration = accessTokenExpiration,
            refreshToken = refreshToken,
            refreshTokenExpiration = refreshTokenExpiration,
        )
    }

    fun refreshAuthenticationTokens(refreshToken: String): AuthenticationTokens {
        val decodedToken: DecodedJWT = jwtService.decode(refreshToken)
        val userId = UUID.fromString(decodedToken.getClaim(TokenField.USERID.name).asString())
        val user: User = userRepository.findById(userId).orElseThrow {
            ResourceNotFoundException("Cannot find user associated to the provided refresh token")
        }
        return generateAuthenticationTokens(user)
    }

    fun getAnonymousAuthentication(): AnonymousAuthenticationToken {
        return AnonymousAuthenticationToken(
            "anonymousKey", "anonymous", UserRole.ANONYMOUS.toAuthorities(),
        )
    }

    private fun generateAccessToken(user: User, expiration: Instant): String {
        return jwtService.issue(
            attributes = mapOf(
                TokenField.USERID.name to user.id.toString(),
                TokenField.ACTION.name to TokenAction.ACCESS.name,
            ),
            expiration = expiration,
        )
    }

    private fun generateRefreshToken(user: User, expiration: Instant): String {
        return jwtService.issue(
            attributes = mapOf(
                TokenField.USERID.name to user.id.toString(),
                TokenField.ACTION.name to TokenAction.REFRESH_AUTHENTICATION_TOKENS.name,
            ),
            expiration = expiration,
        )
    }
}
