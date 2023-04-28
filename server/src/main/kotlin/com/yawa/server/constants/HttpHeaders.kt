package com.yawa.server.constants

object HttpHeaders {
    const val REQUEST_ID = "X-yawa-request-id"
    const val THROTTLING_REMAINING_TOKENS = "X-yawa-throttling-remaining-tokens"
    const val THROTTLING_WAIT_FOR_REFILL_NANOS = "X-yawa-throttling-wait-for-refill-nanos"
    const val THROTTLING_WAIT_FOR_RESET_NANOS = "X-yawa-throttling-wait-for-reset-nanos"
}
