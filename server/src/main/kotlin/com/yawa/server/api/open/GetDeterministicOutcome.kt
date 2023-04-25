package com.yawa.server.api.open

import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.exceptions.YawaDatabaseInternalException
import com.yawa.server.exceptions.YawaInternalException
import mu.KotlinLogging
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.util.*
import javax.validation.Valid

private val log = KotlinLogging.logger {}

@RestController
class GetDeterministicOutcome {

    @GetMapping("/GetDeterministicOutcome")
    fun getDeterministicOutcome(@Valid @RequestBody request: Request) : Response {
        log.info("Called with request $request")
        val outcome = request.outcome
        when {
            outcome.equals(Outcome.SUCCESS) -> {
                log.info("Will return success")
                return Response("Success")
            }
            outcome.equals(Outcome.NOT_AUTHORIZED) -> {
                log.warn("Will return client error: unauthorized")
                throw NotAuthorizedException("Fake client error")
            }
            outcome.equals(Outcome.NOT_FOUND) -> {
                log.warn("Will return client error: resource not found")
                throw ResourceNotFoundException("Fake client error")
            }
            outcome.equals(Outcome.DB_ERROR) -> {
                log.warn("Will return server error: db error")
                throw YawaDatabaseInternalException("Fake server error")
            }
            outcome.equals(Outcome.INTERNAL_ERROR) -> {
                log.error("Will return server error: generic internal error")
                throw YawaInternalException("Fake server error")
            }
            else -> {
                log.info("Will return success")
                return Response("Success")
            }
        }
    }

    data class Request(
        val outcome: Outcome
    )

    data class Response(val message: String)

    enum class Outcome {
        SUCCESS, NOT_AUTHORIZED, NOT_FOUND, DB_ERROR, INTERNAL_ERROR
    }
}
