package com.yawa.server.models.users

import io.github.bucket4j.Bandwidth
import io.github.bucket4j.Refill
import java.time.Duration

enum class UserSubscriptionPlan {
    FREE {
        override fun limit(): Bandwidth = Bandwidth.classic(20, Refill.intervally(20, Duration.ofHours(1)))
    },
    BASIC {
        override fun limit(): Bandwidth = Bandwidth.classic(40, Refill.intervally(40, Duration.ofHours(1)))
    },
    PROFESSIONAL {
        override fun limit(): Bandwidth = Bandwidth.classic(100, Refill.intervally(100, Duration.ofHours(1)))
    },
    SYSTEM {
        override fun limit(): Bandwidth = Bandwidth.classic(1000, Refill.intervally(1000, Duration.ofMinutes(1)))
    };

    abstract fun limit(): Bandwidth
}
