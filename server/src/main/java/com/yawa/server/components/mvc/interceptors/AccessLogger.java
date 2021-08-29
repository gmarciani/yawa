package com.yawa.server.components.mvc.interceptors;

import com.yawa.server.components.mvc.OperationNameProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Component
@Slf4j
public class AccessLogger implements HandlerInterceptor {

    @Autowired
    private OperationNameProvider operationNameProvider;

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
                                 @Nullable Exception ex) throws Exception {
        log.info("Request completed with status {}", response.getStatus());
    }
}
