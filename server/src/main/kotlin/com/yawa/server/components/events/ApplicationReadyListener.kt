package com.yawa.server.components.events

import mu.KotlinLogging
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class ApplicationReadyListener {

    @EventListener
    fun onEvent(event: ApplicationReadyEvent) {
        log.info("Application is ready")
        println("Application is ready")
    }
}
