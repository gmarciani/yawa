package com.yawa.server.models.tokens

import java.time.Instant
import java.util.*

class ConfirmationTokenGrant(
    val userId: UUID,
    val action: TokenAction,
    val expiration: Instant,
)
