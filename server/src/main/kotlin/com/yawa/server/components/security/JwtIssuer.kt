package com.yawa.server.components.security

import com.auth0.jwt.JWT
import com.auth0.jwt.interfaces.DecodedJWT
import com.yawa.server.constants.Security.JWT_SIGNING_ALGORITHM
import org.springframework.stereotype.Component

@Component
class JwtIssuer {

    fun issue(username: String): String {
        return JWT.create()
            .withClaim("username", username)
            .sign(JWT_SIGNING_ALGORITHM)
    }

    fun decode(token: String): DecodedJWT {
        return JWT.require(JWT_SIGNING_ALGORITHM)
            .build()
            .verify(token)
    }
}
