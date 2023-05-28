package com.yawa.server.api.simple

import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.exceptions.YawaBadRequestException
import com.yawa.server.exceptions.YawaInternalException
import mu.KotlinLogging
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.util.*

private val log = KotlinLogging.logger {}

@RestController
class GetDeterministicOutcome {

    @GetMapping("/GetDeterministicOutcome")
    fun getDeterministicOutcome(@RequestBody request: GetDeterministicOutcomeRequest): GetDeterministicOutcomeResponse {
        log.info("Processing request: $request")
        when (request.outcome) {
            Outcome.SUCCESS -> {
                log.info("Will return success")
                return GetDeterministicOutcomeResponse("Success")
            }
            Outcome.NOT_AUTHORIZED -> {
                log.warn("Will return client error: unauthorized")
                throw NotAuthorizedException("Fake client error")
            }
            Outcome.NOT_FOUND -> {
                log.warn("Will return client error: resource not found")
                throw ResourceNotFoundException("Fake client error")
            }
            Outcome.BAD_REQUEST -> {
                log.warn("Will return client error: bad request")
                throw YawaBadRequestException("Fake client error")
            }
            Outcome.INTERNAL_ERROR -> {
                log.error("Will return server error: generic internal error")
                throw YawaInternalException("Fake server error")
            }
            else -> {
                log.info("Will return success")
                return GetDeterministicOutcomeResponse("Success")
            }
        }
    }

    data class GetDeterministicOutcomeRequest(val outcome: Outcome)

    data class GetDeterministicOutcomeResponse(val message: String)

    enum class Outcome {
        SUCCESS, NOT_AUTHORIZED, NOT_FOUND, BAD_REQUEST, INTERNAL_ERROR
    }
}
