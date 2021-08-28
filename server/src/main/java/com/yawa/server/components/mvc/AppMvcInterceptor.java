package com.yawa.server.components.mvc;

import com.yawa.server.constants.MdcKeys;
import com.yawa.server.constants.HttpHeaders;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.MDC;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Component
public class AppMvcInterceptor implements HandlerInterceptor {

    public AppMvcInterceptor() {
        MDC.put(MdcKeys.REQUEST_ID, UUID.randomUUID().toString());
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String requestId = StringUtils.isNotBlank(request.getHeader(HttpHeaders.REQUEST_ID)) ?
                request.getHeader(HttpHeaders.REQUEST_ID) : UUID.randomUUID().toString();
        response.setHeader(HttpHeaders.REQUEST_ID, requestId);
        MDC.put(MdcKeys.REQUEST_ID, requestId);
        return true;
    }
}
