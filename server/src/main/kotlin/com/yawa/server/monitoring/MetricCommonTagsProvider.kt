package com.yawa.server.monitoring

import com.yawa.server.config.AppEnvironmentConfiguration
import com.yawa.server.constants.MetricTags
import io.micrometer.core.instrument.MeterRegistry
import io.micrometer.core.instrument.Tags
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.actuate.autoconfigure.metrics.MeterRegistryCustomizer
import org.springframework.stereotype.Component

@Component
class MetricCommonTagsProvider(
    @Autowired val appEnvironmentConfiguration: AppEnvironmentConfiguration
) : MeterRegistryCustomizer<MeterRegistry> {

    override fun customize(registry: MeterRegistry) {
        val tags = Tags.empty()
                .and(MetricTags.STACK, appEnvironmentConfiguration.stack)
                .and(MetricTags.REGION, appEnvironmentConfiguration.region)
                .and(MetricTags.APPLICATION, appEnvironmentConfiguration.application)
                .and(MetricTags.SERVICE, appEnvironmentConfiguration.service)

        registry.config().commonTags(tags)
    }
}
