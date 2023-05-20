package com.yawa.server.constants

object Security {

    val ACCESS_CONTROL_DENY_LIST = mapOf(
        "username" to listOf("GetAuthenticatedHello")
    )
}
