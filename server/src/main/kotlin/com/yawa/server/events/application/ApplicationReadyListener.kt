package com.yawa.server.events.application

import com.yawa.server.models.users.UserRole
import com.yawa.server.models.users.UserSubscriptionPlan
import com.yawa.server.services.FileSystemService
import com.yawa.server.services.UserService
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class ApplicationReadyListener(
    @Autowired val userService: UserService,
    @Autowired val fileSystemService: FileSystemService,
) {

    @EventListener
    fun onEvent(event: ApplicationReadyEvent) {
        log.info("LIFECYCLE: Application ready")

        log.info("LIFECYCLE: Creating service directories")
        fileSystemService.createServiceDirectories()

        log.info("LIFECYCLE: Creating users")
        userService.createAdminUser()
        userService.createPrometheusUser()
        for (role in UserRole.values()) {
            if (role in listOf(UserRole.ADMIN, UserRole.PROMETHEUS)) continue
            for (userSubscriptionPlan in UserSubscriptionPlan.values()) {
                userService.createTestUser(role, userSubscriptionPlan)
            }
        }
    }
}
