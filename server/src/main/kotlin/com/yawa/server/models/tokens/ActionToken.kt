package com.yawa.server.models.tokens

import java.time.Instant

class ActionToken(
    val token: String,
    val action: TokenAction,
    val expiration: Instant
)
