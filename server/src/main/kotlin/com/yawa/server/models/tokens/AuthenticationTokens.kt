package com.yawa.server.models.tokens

import java.time.Instant

class AuthenticationTokens(
    val accessToken: String,
    val accessTokenExpiration: Instant,
    val refreshToken: String,
    val refreshTokenExpiration: Instant
)
