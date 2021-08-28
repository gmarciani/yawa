package com.yawa.server.components.monitoring;

import com.yawa.server.constants.MetricTags;
import com.yawa.server.constants.RequestAttributes;
import io.micrometer.core.instrument.Tag;
import io.micrometer.core.instrument.Tags;
import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsContributor;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class MetricRequestTagsProvider implements WebMvcTagsContributor {

    @Override
    public Iterable<Tag> getTags(HttpServletRequest request,
                                 HttpServletResponse response, Object handler, Throwable exception) {
        return Tags.empty()
                .and(MetricTags.OPERATION, String.valueOf(request.getAttribute(RequestAttributes.OPERATION)));
                /*.and("requestId", StringUtils.isNotBlank(response.getHeader(HttpHeaders.REQUEST_ID)) ?
                        response.getHeader(HttpHeaders.REQUEST_ID) : "none-" + UUID.randomUUID());*/
    }

    @Override
    public Iterable<Tag> getLongRequestTags(HttpServletRequest request, Object handler) {
        return null;
    }
}
