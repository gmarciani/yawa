package com.yawa.config;

import io.micrometer.core.instrument.Tag;
import io.micrometer.core.instrument.Tags;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsContributor;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class MetricsTagContributor implements WebMvcTagsContributor {

    @Autowired
    private AppConfigurationProvider appConfigurationProvider;

    @Override
    public Iterable<Tag> getTags(HttpServletRequest request,
                                 HttpServletResponse response, Object handler, Throwable exception) {
        return Tags.empty()
                .and("stack", appConfigurationProvider.getProperty("yawa.stack"))
                .and("region", appConfigurationProvider.getProperty("yawa.region"));
    }

    @Override
    public Iterable<Tag> getLongRequestTags(HttpServletRequest request, Object handler) {
        return null;
    }
}
