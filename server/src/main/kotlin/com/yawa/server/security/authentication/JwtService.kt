package com.yawa.server.security.authentication

import com.auth0.jwt.JWT
import com.auth0.jwt.interfaces.DecodedJWT
import com.yawa.server.security.authentication.SecurityJwtConfiguration
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class JwtService(
    @Autowired val securityJwtConfiguration: SecurityJwtConfiguration
) {

    fun issue(username: String): String {
        return JWT.create()
            .withClaim("username", username)
            .sign(securityJwtConfiguration.signingAlgorithm)
    }

    fun decode(token: String): DecodedJWT {
        return JWT.require(securityJwtConfiguration.signingAlgorithm)
            .build()
            .verify(token)
    }
}
