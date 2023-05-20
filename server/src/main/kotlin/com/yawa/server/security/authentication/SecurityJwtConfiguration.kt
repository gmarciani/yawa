package com.yawa.server.security.authentication

import com.auth0.jwt.algorithms.Algorithm
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class SecurityJwtConfiguration(
    @Value("\${yawa.security.jwt.secret}") private val secret: String
) {
    val issuer: String = "YAWA"
    val signingAlgorithm: Algorithm = Algorithm.HMAC256(secret)
}
