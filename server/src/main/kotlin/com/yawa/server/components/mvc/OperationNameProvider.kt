package com.yawa.server.components.mvc

import org.springframework.http.HttpMethod
import org.springframework.stereotype.Component

@Component
class OperationNameProvider {

    val OPERATIONS = mapOf(
        Pair(HttpMethod.GET.name, "/api/open/random") to "GetRandomOutcome"
    )

    fun getOperationName(method: String, uri: String) : String {
        return OPERATIONS.getOrDefault(Pair(method, uri),
            getDefaultOperationName(method = method, uri = uri))
    }

    private fun getDefaultOperationName(method: String, uri: String) : String = "$method:$uri"
}
