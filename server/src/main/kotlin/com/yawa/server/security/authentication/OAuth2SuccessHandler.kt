package com.yawa.server.security.authentication

import com.yawa.server.services.UserService
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.security.web.authentication.AuthenticationSuccessHandler
import org.springframework.stereotype.Component

@Component
class OAuth2SuccessHandler(
    @Autowired val authenticationService: AuthenticationService,
    @Autowired val userService: UserService
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

        val user = userService.findOrCreateOAuth2User(email, name, picture)

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
