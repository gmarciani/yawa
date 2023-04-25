package com.yawa.server.components.security

import com.yawa.server.components.mvc.OperationNameProvider
import com.yawa.server.constants.Security.ACCESS_CONTROL_DENY_LIST
import com.yawa.server.models.users.User
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.AccessDecisionVoter
import org.springframework.security.access.ConfigAttribute
import org.springframework.security.core.Authentication
import org.springframework.security.web.FilterInvocation
import org.springframework.stereotype.Component

private val log = KotlinLogging.logger {}

@Component
class AccessControlVoter(
    @Autowired val operationNameProvider : OperationNameProvider
) : AccessDecisionVoter<FilterInvocation> {

    override fun supports(attribute: ConfigAttribute?): Boolean {
        return false
    }

    override fun supports(clazz: Class<*>?): Boolean {
        return FilterInvocation::class.java.isAssignableFrom(clazz!!)
    }

    override fun vote(
        authentication: Authentication?,
        filterInvocation: FilterInvocation?,
        attributes: MutableCollection<ConfigAttribute>?
    ): Int {
        val username = (authentication?.principal as User?)?.username

        if (username == null) {
            log.error("AUTHORIZATION: Cannot determine username, abstaining from authorization vote")
            return AccessDecisionVoter.ACCESS_ABSTAIN
        }

        val method = filterInvocation?.request?.method
        val requestUri = filterInvocation?.request?.requestURI

        if (method == null || requestUri == null) {
            log.error("AUTHORIZATION: Cannot determine http request method and/or URI, abstaining from authorization vote")
            return AccessDecisionVoter.ACCESS_ABSTAIN
        }

        val operationName = operationNameProvider.getOperationName(method, requestUri)

        return if (isUserAuthorizedForOperation(username, operationName)) {
            log.info("AUTHORIZATION: User $username is authorized for operation $operationName")
            AccessDecisionVoter.ACCESS_GRANTED
        } else {
            log.warn("AUTHORIZATION: User $username is not authorized for operation $operationName")
            AccessDecisionVoter.ACCESS_DENIED
        }
    }

    private fun isUserAuthorizedForOperation(username: String, operationName: String): Boolean {
        val deniedOperations = ACCESS_CONTROL_DENY_LIST.getOrDefault(username, emptyList())
        return !deniedOperations.contains(operationName)
    }
}
