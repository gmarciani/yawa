package com.yawa.server.components.mvc.common

import org.springframework.stereotype.Component
import java.util.*

@Component
class RequestIdGenerator {
    fun generateRequestId() :  String = UUID.randomUUID().toString()
}
