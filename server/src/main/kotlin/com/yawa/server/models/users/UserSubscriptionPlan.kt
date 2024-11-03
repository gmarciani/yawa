package com.yawa.server.models.users

import io.github.bucket4j.Bandwidth
import java.time.Duration.ofMinutes

enum class UserSubscriptionPlan {
    FREE {
        override fun limit(): Bandwidth = Bandwidth.builder()
            .capacity(20)
            .refillIntervally(20, ofMinutes(1))
            .build()
    },
    BASIC {
        override fun limit(): Bandwidth = Bandwidth.builder()
            .capacity(40)
            .refillIntervally(40, ofMinutes(1))
            .build()
    },
    PROFESSIONAL {
        override fun limit(): Bandwidth = Bandwidth.builder()
            .capacity(100)
            .refillIntervally(100, ofMinutes(1))
            .build()
    },
    SYSTEM {
        override fun limit(): Bandwidth = Bandwidth.builder()
            .capacity(1000)
            .refillIntervally(1000, ofMinutes(1))
            .build()
    }, ;

    abstract fun limit(): Bandwidth
}
