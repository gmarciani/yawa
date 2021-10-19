package com.yawa.server.components.monitoring

import com.yawa.server.components.environment.AppEnvironment
import com.yawa.server.constants.MetricTags
import io.micrometer.core.instrument.MeterRegistry
import io.micrometer.core.instrument.Tags
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.actuate.autoconfigure.metrics.MeterRegistryCustomizer
import org.springframework.stereotype.Component

@Component
class MetricCommonTagsProvider(
    @Autowired val appEnvironment: AppEnvironment
) : MeterRegistryCustomizer<MeterRegistry> {

    override fun customize(registry: MeterRegistry) {
        val tags = Tags.empty()
                .and(MetricTags.STACK, appEnvironment.stack)
                .and(MetricTags.REGION, appEnvironment.region)
                .and(MetricTags.APPLICATION, appEnvironment.application)
                .and(MetricTags.SERVICE, appEnvironment.service)

        registry.config().commonTags(tags)
    }
}
