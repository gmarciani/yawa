package com.yawa.server.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class AppEnvironmentConfiguration(

    @Value("\${yawa.stack}")
    val stack: String,

    @Value("\${yawa.region}")
    val region: String,

    @Value("\${yawa.application}")
    val application: String,

    @Value("\${yawa.service}")
    val service: String
)
