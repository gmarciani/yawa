package com.yawa.config;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.MDC;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Component
public class AppMvcInterceptor implements HandlerInterceptor {

    private final String MDC_KEY = "transactionId";
    private final String TRACE_HEADER = "X-Trace-Id";

    public AppMvcInterceptor() {
        MDC.put(MDC_KEY, UUID.randomUUID().toString());
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String traceID = StringUtils.isNotBlank(request.getHeader(TRACE_HEADER)) ?
                request.getHeader(TRACE_HEADER) : UUID.randomUUID().toString();
        MDC.put(MDC_KEY, traceID);
        return true;
    }
}
