package com.yawa.server.security.authentication

import com.fasterxml.jackson.databind.ObjectMapper
import com.yawa.server.datastore.repositories.UserRepository
import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserProfile
import com.yawa.server.models.users.UserRole
import com.yawa.server.models.users.UserSettings
import com.yawa.server.models.users.UserSubscriptionPlan
import com.yawa.server.security.encryption.PasswordEncodeService
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.security.web.authentication.AuthenticationSuccessHandler
import org.springframework.stereotype.Component
import java.time.Instant
import java.util.UUID

@Component
class OAuth2SuccessHandler(
    @Autowired val authenticationService: AuthenticationService,
    @Autowired val userRepository: UserRepository,
    @Autowired val passwordEncoder: PasswordEncodeService,
    @Autowired val objectMapper: ObjectMapper
) : AuthenticationSuccessHandler {

    override fun onAuthenticationSuccess(
        request: HttpServletRequest,
        response: HttpServletResponse,
        authentication: Authentication
    ) {
        val principal = authentication.principal as OAuth2User
        val email = principal.getAttribute<String>("email") ?: ""
        val name = principal.getAttribute<String>("name") ?: ""
        val picture = principal.getAttribute<String>("picture") ?: ""

        val user = userRepository.findByEmail(email).orElseGet {
            val newUser = User(
                email = email,
                password = passwordEncoder.encode(UUID.randomUUID().toString()),
                role = UserRole.NORMAL,
                subscriptionPlan = UserSubscriptionPlan.FREE,
                isEnabled = true,
                createdAt = Instant.now()
            )

            val nameParts = name.split(" ", limit = 2)
            newUser.profile = UserProfile(
                user = newUser,
                firstname = nameParts.getOrElse(0) { "" },
                lastname = nameParts.getOrElse(1) { "" },
                picture = picture
            )

            newUser.settings = UserSettings(user = newUser)
            userRepository.save(newUser)
        }

        val authenticationTokens = authenticationService.generateAuthenticationTokens(user)

        val redirectUrl = "https://localhost:8010/auth/oauth2/callback?" +
            "userId=${user.id}" +
            "&accessToken=${authenticationTokens.accessToken}" +
            "&accessTokenExpiration=${authenticationTokens.accessTokenExpiration}" +
            "&refreshToken=${authenticationTokens.refreshToken}" +
            "&refreshTokenExpiration=${authenticationTokens.refreshTokenExpiration}"

        response.sendRedirect(redirectUrl)
    }
}
