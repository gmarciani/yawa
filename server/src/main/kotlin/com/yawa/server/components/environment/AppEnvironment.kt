package com.yawa.server.components.environment

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class AppEnvironment(

    @Value("\${yawa.stack}")
    val stack: String,

    @Value("\${yawa.region}")
    val region: String,

    @Value("\${yawa.application}")
    val application: String,

    @Value("\${yawa.service}")
    val service: String
)
