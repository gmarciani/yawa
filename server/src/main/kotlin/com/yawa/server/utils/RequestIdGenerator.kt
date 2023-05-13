package com.yawa.server.utils

import org.springframework.stereotype.Component
import java.util.*

@Component
class RequestIdGenerator {
    fun generateRequestId():  String = UUID.randomUUID().toString()
}
