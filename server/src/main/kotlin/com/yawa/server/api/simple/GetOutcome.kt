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
class GetOutcome {

    @GetMapping("/simple/outcome")
    fun getOutcome(@RequestBody request: GetOutcomeRequest): GetOutcomeResponse {
        log.info("Processing request: $request")
        val outcome = if (request.outcome == Outcome.RANDOM) {
            val dice = random()
            if (dice <= 6.0/10) {
                Outcome.SUCCESS
            } else if (dice <= 7.5/10) {
                Outcome.NOT_AUTHORIZED
            } else if (dice <= 9.0/10) {
                Outcome.NOT_FOUND
            } else if (dice <= 9.5/10) {
                Outcome.BAD_REQUEST
            } else {
                Outcome.INTERNAL_ERROR
            }
        } else request.outcome
        when (outcome) {
            Outcome.SUCCESS -> {
                log.info("Will return success")
                return GetOutcomeResponse("Success")
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
                return GetOutcomeResponse("Success")
            }
        }
    }

    data class GetOutcomeRequest(val outcome: Outcome)

    data class GetOutcomeResponse(val message: String)

    enum class Outcome {
        SUCCESS, NOT_AUTHORIZED, NOT_FOUND, BAD_REQUEST, INTERNAL_ERROR, RANDOM
    }

    private fun random(): Double = Random().nextDouble()
}
