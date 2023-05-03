package com.yawa.server.constants

object Security {

    val ACCESS_CONTROL_DENY_LIST = mapOf(
        "prometheus" to listOf("GetAuthenticatedHello")
    )
}
