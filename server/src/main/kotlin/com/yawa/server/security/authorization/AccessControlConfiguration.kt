package com.yawa.server.security.authorization

object AccessControlConfiguration {
    val ACCESS_CONTROL_DENY_LIST = mapOf(
        "userId" to listOf("GetAuthenticatedHello"),
//        "admin" to listOf("GetAuthenticatedHello")
    )
}
