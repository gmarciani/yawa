package com.yawa.server.components.actuators.info

import org.springframework.boot.actuate.info.Info
import org.springframework.boot.actuate.info.InfoContributor
import org.springframework.stereotype.Component

@Component
class CustomInfoContributor : InfoContributor {
    override fun contribute(builder: Info.Builder) {
        builder.withDetail("custom", mapOf("key_1" to "value_1", "key_2" to "value_2"))
    }
}
