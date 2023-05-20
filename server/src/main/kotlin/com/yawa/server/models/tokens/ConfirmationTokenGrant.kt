package com.yawa.server.models.tokens

import java.time.Instant

class ConfirmationTokenGrant(
    val username: String,
    val action: TokenAction,
    val expiration: Instant
)
