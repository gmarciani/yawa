package com.yawa.server.interceptors

import com.yawa.server.models.users.User
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import mu.KotlinLogging
import org.springframework.lang.Nullable
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.servlet.HandlerInterceptor

private val log = KotlinLogging.logger {}

@Component
class AccessLogger : HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse , handler: Any): Boolean {
        if (request.requestURI == "/error") {
            return true
        }
        val authentication = SecurityContextHolder.getContext().authentication
        val username = (authentication.principal as User).username
        val method = request.method
        val uri = request.requestURI
        log.info("REQUEST START $method:$uri from user $username")
        return true
    }

    override fun afterCompletion(
        request: HttpServletRequest,
        response: HttpServletResponse,
        handler: Any,
        @Nullable ex: Exception?
    ) {
        if (request.requestURI == "/error") {
            return
        }
        val authentication = SecurityContextHolder.getContext().authentication
        val username = (authentication.principal as User).username
        val method = request.method
        val uri = request.requestURI
        val status = response.status
        log.info("REQUEST END $method:$uri from user $username with status $status")
    }
}
