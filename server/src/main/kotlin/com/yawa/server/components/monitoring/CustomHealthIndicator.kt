package com.yawa.server.components.monitoring

import org.springframework.boot.actuate.health.Health
import org.springframework.boot.actuate.health.HealthIndicator
import org.springframework.stereotype.Component

@Component
class CustomHealthIndicator : HealthIndicator {

    override fun health() : Health {
        val details = mapOf("CHECK_1" to check1(), "CHECK_2" to check2())

        if (details.containsValue("ERROR")) {
            return Health.down().withDetails(details).build()
        }

        return Health.up().withDetails(details).build()
    }

    fun check1() : String = "OK"

    private fun check2() : String = "OK"
}
