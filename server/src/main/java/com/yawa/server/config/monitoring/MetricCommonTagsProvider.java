package com.yawa.server.config.monitoring;

import com.yawa.server.config.environment.AppEnvironment;
import com.yawa.server.constants.MetricTags;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Tag;
import io.micrometer.core.instrument.Tags;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.metrics.MeterRegistryCustomizer;
import org.springframework.stereotype.Component;

@Component
public class MetricCommonTagsProvider implements MeterRegistryCustomizer<MeterRegistry> {

    @Autowired
    private AppEnvironment appEnvironment;

    @Override
    public void customize(MeterRegistry registry) {
        Iterable<Tag> tags = Tags.empty()
                .and(MetricTags.STACK, appEnvironment.getStack())
                .and(MetricTags.REGION, appEnvironment.getRegion())
                .and(MetricTags.APPLICATION, appEnvironment.getApplication())
                .and(MetricTags.COMPONENT, appEnvironment.getComponent());

        registry.config().commonTags(tags);
    }
}
