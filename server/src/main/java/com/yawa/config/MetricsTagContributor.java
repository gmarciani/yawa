package com.yawa.config;

import com.yawa.constants.SystemProperties;
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
                .and("stack", appConfigurationProvider.getProperty(SystemProperties.STACK))
                .and("region", appConfigurationProvider.getProperty(SystemProperties.REGION));
                /*.and("requestId", StringUtils.isNotBlank(response.getHeader(HttpHeaders.REQUEST_ID)) ?
                        response.getHeader(HttpHeaders.REQUEST_ID) : "fake-" + UUID.randomUUID());*/
    }

    @Override
    public Iterable<Tag> getLongRequestTags(HttpServletRequest request, Object handler) {
        return null;
    }
}
