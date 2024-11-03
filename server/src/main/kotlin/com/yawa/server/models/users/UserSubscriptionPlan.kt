package com.yawa.server.models.users

import io.github.bucket4j.Bandwidth
import io.github.bucket4j.Refill
import java.time.Duration

enum class UserSubscriptionPlan {
    FREE {
        override fun limit(): Bandwidth = Bandwidth.classic(20, Refill.intervally(20, Duration.ofMinutes(1)))
    },
    BASIC {
        override fun limit(): Bandwidth = Bandwidth.classic(40, Refill.intervally(40, Duration.ofMinutes(1)))
    },
    PROFESSIONAL {
        override fun limit(): Bandwidth = Bandwidth.classic(100, Refill.intervally(100, Duration.ofMinutes(1)))
    },
    SYSTEM {
        override fun limit(): Bandwidth = Bandwidth.classic(1000, Refill.intervally(1000, Duration.ofMinutes(1)))
    }, ;
//
//    FREE {
//        override fun limit(): Bandwidth = Bandwidth.builder()
//            .capacity(20)
//            .refillIntervally(20, ofMinutes(1))
//            .build()
//    },
//    BASIC {
//        override fun limit(): Bandwidth = Bandwidth.builder()
//            .capacity(40)
//            .refillIntervally(40, ofMinutes(1))
//            .build()
//    },
//    PROFESSIONAL {
//        override fun limit(): Bandwidth = Bandwidth.builder()
//            .capacity(100)
//            .refillIntervally(100, ofMinutes(1))
//            .build()
//    },
//    SYSTEM {
//        override fun limit(): Bandwidth = Bandwidth.builder()
//            .capacity(1000)
//            .refillIntervally(1000, ofMinutes(1))
//            .build()
//    }, ;

    abstract fun limit(): Bandwidth
}
