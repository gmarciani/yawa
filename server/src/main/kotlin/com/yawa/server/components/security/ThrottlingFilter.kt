package com.yawa.server.components.security

import com.yawa.server.components.throttling.ThrottlingService
import com.yawa.server.constants.HttpHeaders
import com.yawa.server.models.users.User
import mu.KotlinLogging
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


private val log = KotlinLogging.logger {}

@Component
class ThrottlingFilter(
    @Autowired val throttlingService: ThrottlingService,
) : OncePerRequestFilter() {

    override fun doFilterInternal(request: HttpServletRequest,
                                  response: HttpServletResponse,
                                  chain: FilterChain
    ) {

        val user = SecurityContextHolder.getContext().authentication?.principal as User?

        if (user == null) {
            log.error("THROTTLING: Cannot determine user, skipping filter")
            chain.doFilter(request, response)
            return
        }

        val probe = throttlingService.resolveBucket(user).tryConsumeAndReturnRemaining(1)

        response.setHeader(HttpHeaders.THROTTLING_REMAINING_TOKENS, probe.remainingTokens.toString())
        response.setHeader(HttpHeaders.THROTTLING_WAIT_FOR_REFILL_NANOS, probe.nanosToWaitForReset.toString())
        response.setHeader(HttpHeaders.THROTTLING_WAIT_FOR_RESET_NANOS, probe.nanosToWaitForRefill.toString())

        if (!probe.isConsumed) {
            response.sendError(
                HttpStatus.TOO_MANY_REQUESTS.value(),
                "Request limit linked to your account has been exhausted. Please retry later")
        }

        chain.doFilter(request, response)
    }
}
