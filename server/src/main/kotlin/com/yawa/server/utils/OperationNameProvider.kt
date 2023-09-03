package com.yawa.server.utils

import org.springframework.http.HttpMethod
import org.springframework.stereotype.Component

@Component
class OperationNameProvider {

    val OPERATIONS = mapOf(
        // Public
        Pair(HttpMethod.GET.name(), "/api/open/getDeterministicOutcome") to "GetDeterministicOutcome",
        Pair(HttpMethod.GET.name(), "/api/open/getRandomOutcome") to "GetRandomOutcome",

        // Administration - Read operations
        Pair(HttpMethod.GET.name(), "/manage/configprops") to "GetConfig",
        Pair(HttpMethod.GET.name(), "/manage/env") to "GetEnv",
        Pair(HttpMethod.GET.name(), "/manage/health") to "GetHealth",
        Pair(HttpMethod.GET.name(), "/manage/info") to "GetInfo",
        Pair(HttpMethod.GET.name(), "/manage/mappings") to "GetMappings",
        Pair(HttpMethod.GET.name(), "/manage/metrics") to "GetMetrics",
        Pair(HttpMethod.GET.name(), "/manage/openapi") to "GetOpenApi",
        Pair(HttpMethod.GET.name(), "/manage/prometheus") to "GetPrometheus",
        Pair(HttpMethod.GET.name(), "/manage/swagger-ui") to "GetSwaggerUi",

        // Administration - Write operations
        Pair(HttpMethod.POST.name(), "/manage/shutdown") to "ManageShutdown",

        // Authentication
        Pair(HttpMethod.POST.name(), "/api/auth/login") to "Login",
        Pair(HttpMethod.POST.name(), "/api/auth/logout") to "Logout",

        // Users management
        Pair(HttpMethod.POST.name(), "/api/users/createUsers") to "CreateUsers",
        Pair(HttpMethod.DELETE.name(), "/api/users/deleteUsers") to "DeleteUsers",
        Pair(HttpMethod.GET.name(), "/api/users/describeUsers") to "DescribeUsers",
        Pair(HttpMethod.GET.name(), "/api/users/listUsers") to "ListUsers",
        Pair(HttpMethod.PATCH.name(), "/api/users/updateUsers") to "UpdateUsers",

        // Simple
        Pair(HttpMethod.GET.name(), "/simple/outcome") to "GetOutcome",
        Pair(HttpMethod.GET.name(), "/simple/greetings") to "GetGreetings",
    )

    fun getOperationName(method: String, uri: String): String {
        return OPERATIONS.getOrDefault(Pair(method, uri),
            getDefaultOperationName(method = method, uri = uri))
    }

    private fun getDefaultOperationName(method: String, uri: String): String = "$method:$uri"
}
