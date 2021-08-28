package com.yawa.server.components.mvc.interceptors;

import com.yawa.server.components.mvc.OperationNameProvider;
import com.yawa.server.components.mvc.common.RequestIdGenerator;
import com.yawa.server.constants.HttpHeaders;
import com.yawa.server.constants.MdcKeys;
import com.yawa.server.constants.RequestAttributes;
import org.slf4j.MDC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Component
public class RequestOperationNameAssigner implements HandlerInterceptor {

    @Autowired
    private OperationNameProvider operationNameProvider;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String operationName = operationNameProvider.getOperationName(request.getMethod(), request.getRequestURI());
        request.setAttribute(RequestAttributes.OPERATION, operationName);
        return true;
    }
}
