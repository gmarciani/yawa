package com.yawa.server.components.events

import mu.KotlinLogging
import org.springframework.boot.context.event.ApplicationStartedEvent
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class ApplicationStartedListener {

    @EventListener
    fun onEvent(event: ApplicationStartedEvent) {
        log.info("LIFECYCLE: Application started")
    }
}
