package com.yawa.server.config.monitoring;

import com.yawa.server.config.mvc.OperationNameProvider;
import com.yawa.server.constants.MetricTags;
import io.micrometer.core.instrument.Tag;
import io.micrometer.core.instrument.Tags;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsContributor;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class MetricRequestTagsProvider implements WebMvcTagsContributor {

    @Autowired
    private OperationNameProvider operationNameProvider;

    @Override
    public Iterable<Tag> getTags(HttpServletRequest request,
                                 HttpServletResponse response, Object handler, Throwable exception) {
        return Tags.empty()
                .and(MetricTags.OPERATION,
                        operationNameProvider.getOperationName(request.getMethod(), request.getRequestURI()));
                /*.and("requestId", StringUtils.isNotBlank(response.getHeader(HttpHeaders.REQUEST_ID)) ?
                        response.getHeader(HttpHeaders.REQUEST_ID) : "none-" + UUID.randomUUID());*/
    }

    @Override
    public Iterable<Tag> getLongRequestTags(HttpServletRequest request, Object handler) {
        return null;
    }
}
