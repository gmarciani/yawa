package com.yawa.server.api.open

import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.exceptions.YawaDatabaseInternalException
import com.yawa.server.exceptions.YawaInternalException
import mu.KotlinLogging
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

private val log = KotlinLogging.logger {}

@RestController
class GetRandomOutcome {

    @GetMapping("/GetRandomOutcome")
    fun getRandomOutcome() : Response {
        log.info("Called")
        val dice = Random().nextFloat()
        if (dice <= 6.0/10) {
            log.info("Will return success")
            return Response("Success")
        } else if (dice <= 7.5/10) {
            log.warn("Will return client error: unauthorized")
            throw NotAuthorizedException("Fake client error")
        } else if (dice <= 9.0/10) {
            log.warn("Will return client error: resource not found")
            throw ResourceNotFoundException("Fake client error")
        } else if (dice <= 9.5/10) {
            log.warn("Will return server error: db error")
            throw YawaDatabaseInternalException("Fake server error")
        } else {
            log.error("Will return server error: generic internal error")
            throw YawaInternalException("Fake server error")
        }
    }

    data class Response(val message: String)
}
