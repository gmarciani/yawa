package com.yawa.server.components.mvc.interceptors

import com.yawa.server.components.mvc.common.RequestIdGenerator
import com.yawa.server.constants.HttpHeaders
import com.yawa.server.constants.MdcKeys
import com.yawa.server.constants.RequestAttributes
import org.slf4j.MDC
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.web.servlet.HandlerInterceptor

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


@Component
class RequestIdAssigner(
    @Autowired val requestIdGenerator: RequestIdGenerator
) : HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        val requestId = requestIdGenerator.generateRequestId()
        // A HttpServletRequest is read-only so we cannot modify its headers
        request.setAttribute(RequestAttributes.REQUEST_ID, requestId)
        response.setHeader(HttpHeaders.REQUEST_ID, requestId)
        MDC.put(MdcKeys.REQUEST_ID, requestId)
        return true
    }
}
