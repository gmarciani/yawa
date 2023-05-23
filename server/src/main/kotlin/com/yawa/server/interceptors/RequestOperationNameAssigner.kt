package com.yawa.server.mvc.interceptors;

import com.yawa.server.constants.MdcKeys
import com.yawa.server.constants.RequestAttributes
import com.yawa.server.utils.OperationNameProvider
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.slf4j.MDC
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.web.servlet.HandlerInterceptor


@Component
class RequestOperationNameAssigner(
    @Autowired val operationNameProvider : OperationNameProvider
): HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        val operationName = operationNameProvider.getOperationName(request.method, request.requestURI);
        request.setAttribute(RequestAttributes.OPERATION, operationName);
        MDC.put(MdcKeys.OPERATION, operationName);
        return true;
    }
}
