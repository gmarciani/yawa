package com.yawa.server.components.security.authorization

import com.yawa.server.constants.Security
import com.yawa.server.models.users.User
import com.yawa.server.utils.OperationNameProvider
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.authorization.AuthorizationDecision
import org.springframework.security.authorization.AuthorizationManager
import org.springframework.security.core.Authentication
import org.springframework.security.web.access.intercept.RequestAuthorizationContext
import org.springframework.stereotype.Component
import java.util.function.Supplier

private val log = KotlinLogging.logger {}

@Component
class AccessControlAuthorizationManager(
    @Autowired val operationNameProvider : OperationNameProvider
): AuthorizationManager<RequestAuthorizationContext> {

    override fun check(authentication: Supplier<Authentication>, `object`: RequestAuthorizationContext): AuthorizationDecision? {

        if (authentication is AnonymousAuthenticationToken) {
            log.warn("AUTHORIZATION: Anonymous authentication, abstaining from authorization vote")
            return AuthorizationDecision(true)
        }

        val username = (authentication.get().principal as User).username

        val method = `object`.request.method
        val requestUri = `object`.request.requestURI

        if (method == null || requestUri == null) {
            log.warn("AUTHORIZATION: Cannot determine http request method and/or URI, abstaining from authorization vote")
            return AuthorizationDecision(true)
        }

        val operationName = operationNameProvider.getOperationName(method, requestUri)

        if (isUserAuthorizedForOperation(username, operationName)) {
            log.info("AUTHORIZATION: User $username is authorized for operation $operationName")
            return AuthorizationDecision(true)
        } else {
            log.warn("AUTHORIZATION: User $username is not authorized for operation $operationName")
            return AuthorizationDecision(false)
        }
    }

    private fun isUserAuthorizedForOperation(username: String, operationName: String): Boolean {
        val deniedOperations = Security.ACCESS_CONTROL_DENY_LIST.getOrDefault(username, emptyList())
        return !deniedOperations.contains(operationName)
    }
}
