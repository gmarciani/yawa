package com.yawa.server.components.events

import mu.KotlinLogging
import org.springframework.stereotype.Component
import javax.annotation.PreDestroy

private val log = KotlinLogging.logger {}

@Component
class ApplicationShutdownListener {

    @PreDestroy
    fun action() {
        log.info("Application is shutting down")
    }
}
