package com.yawa.server.events.application

import mu.KotlinLogging
import org.springframework.stereotype.Component
import javax.annotation.PreDestroy

private val log = KotlinLogging.logger {}

@Component
class ApplicationShutdownListener {

    @PreDestroy
    fun action() {
        log.info("LIFECYCLE: Application is shutting down")
    }
}
