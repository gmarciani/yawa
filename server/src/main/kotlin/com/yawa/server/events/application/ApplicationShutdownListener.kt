package com.yawa.server.events.application

import jakarta.annotation.PreDestroy
import mu.KotlinLogging
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class ApplicationShutdownListener {

    @PreDestroy
    fun action() {
        log.info("LIFECYCLE: Application is shutting down")
    }
}
