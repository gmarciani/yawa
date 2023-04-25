package com.yawa.server.constants

import com.auth0.jwt.algorithms.Algorithm

object Security {
    const val JWT_SECRET = "secret"
    val JWT_SIGNING_ALGORITHM: Algorithm = Algorithm.HMAC256(JWT_SECRET)

    val ACCESS_CONTROL_DENY_LIST = mapOf(
        "prometheus" to listOf("GetAuthenticatedHello")
    )

}
