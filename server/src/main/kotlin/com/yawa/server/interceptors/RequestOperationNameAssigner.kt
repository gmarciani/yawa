package com.yawa.server.components.mvc.interceptors;

import com.yawa.server.utils.OperationNameProvider;
import com.yawa.server.constants.MdcKeys;
import com.yawa.server.constants.RequestAttributes;
import org.slf4j.MDC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Component
class RequestOperationNameAssigner(
    @Autowired val operationNameProvider : OperationNameProvider
) : HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        val operationName = operationNameProvider.getOperationName(request.getMethod(), request.getRequestURI());
        request.setAttribute(RequestAttributes.OPERATION, operationName);
        MDC.put(MdcKeys.OPERATION, operationName);
        return true;
    }
}
