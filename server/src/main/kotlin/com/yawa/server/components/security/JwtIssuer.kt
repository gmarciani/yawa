package com.yawa.server.components.security

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.yawa.server.constants.Security
import org.springframework.stereotype.Component

@Component
class JwtIssuer {

    fun issue(username: String): String {
        return JWT.create()
            .withClaim("username", username)
            .sign(Algorithm.HMAC256(Security.JWT_SECRET))
    }
}
