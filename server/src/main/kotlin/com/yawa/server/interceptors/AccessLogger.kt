package com.yawa.server.components.mvc.interceptors

import mu.KotlinLogging
import org.springframework.lang.Nullable
import org.springframework.stereotype.Component
import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

private val log = KotlinLogging.logger {}

@Component
class AccessLogger : HandlerInterceptor {

    override fun afterCompletion(
        request: HttpServletRequest,
        response: HttpServletResponse,
        handler: Any,
        @Nullable ex: Exception?
    ) {
        val uri = request.requestURI
        val status = request.requestURI
        log.info("REQUEST END $uri : $status")
    }
}
