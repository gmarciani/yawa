package com.yawa.server.components.actuators.info

import org.springframework.boot.actuate.autoconfigure.info.ConditionalOnEnabledInfoContributor
import org.springframework.boot.actuate.autoconfigure.info.InfoContributorAutoConfiguration
import org.springframework.boot.actuate.autoconfigure.info.InfoContributorFallback
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order

@Configuration
class InfoContributorsConfig {

    @Bean
    @ConditionalOnEnabledInfoContributor(value = "custom", fallback = InfoContributorFallback.DISABLE)
    @Order(InfoContributorAutoConfiguration.DEFAULT_ORDER)
    fun customInfoContributor(): CustomInfoContributor? {
        return CustomInfoContributor()
    }
}
