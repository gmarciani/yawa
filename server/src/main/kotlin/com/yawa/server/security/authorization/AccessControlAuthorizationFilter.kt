package com.yawa.server.security.authorization

import com.yawa.server.models.users.User
import com.yawa.server.security.authorization.AccessControlConfiguration.ACCESS_CONTROL_DENY_LIST
import com.yawa.server.utils.OperationNameProvider
import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter


private val log = KotlinLogging.logger {}

@Component
class AccessControlAuthorizationFilter(
    @Autowired val operationNameProvider : OperationNameProvider
): OncePerRequestFilter() {

    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {

        val authentication = SecurityContextHolder.getContext().authentication

        if (authentication is AnonymousAuthenticationToken) {
            log.warn("AUTHORIZATION: Anonymous authentication, abstaining from authorization vote")
            chain.doFilter(request, response)
            return
        }

        val username = (authentication.principal as User).username

        val method = request.method
        val requestUri = request.requestURI

        if (method == null || requestUri == null) {
            log.warn("AUTHORIZATION: Cannot determine http request method and/or URI, abstaining from authorization vote")
            chain.doFilter(request, response)
            return
        }

        val operationName = operationNameProvider.getOperationName(method, requestUri)

        if (isUserAuthorizedForOperation(username, operationName)) {
            log.info("AUTHORIZATION: User $username is authorized for operation $operationName")
            chain.doFilter(request, response)
            return
        } else {
            log.warn("AUTHORIZATION: User $username is not authorized for operation $operationName")
            handleUnauthorized(response)
            return
        }
    }

    private fun isUserAuthorizedForOperation(username: String, operationName: String): Boolean {
        val deniedOperations = ACCESS_CONTROL_DENY_LIST.getOrDefault(username, emptyList())
        return !deniedOperations.contains(operationName)
    }

    private fun handleUnauthorized(response: HttpServletResponse) {
        response.contentType = MediaType.APPLICATION_JSON.toString()
        response.status = HttpServletResponse.SC_FORBIDDEN
    }
}
