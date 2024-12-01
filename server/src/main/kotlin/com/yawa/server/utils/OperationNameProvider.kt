package com.yawa.server.utils

import org.springframework.http.HttpMethod
import org.springframework.stereotype.Component

@Component
class OperationNameProvider {

    val OPERATIONS = mapOf(
        // Admin - Server
        Pair(HttpMethod.GET.name(), "/manage/configprops") to "GetConfig",
        Pair(HttpMethod.GET.name(), "/manage/env") to "GetEnv",
        Pair(HttpMethod.GET.name(), "/manage/health") to "GetHealth",
        Pair(HttpMethod.GET.name(), "/manage/info") to "GetInfo",
        Pair(HttpMethod.GET.name(), "/manage/mappings") to "GetMappings",
        Pair(HttpMethod.GET.name(), "/manage/metrics") to "GetMetrics",
        Pair(HttpMethod.GET.name(), "/manage/prometheus") to "GetPrometheus",
        Pair(HttpMethod.POST.name(), "/manage/shutdown") to "ManageShutdown",

        // Admin - Email
        Pair(HttpMethod.POST.name(), "/admin/mail") to "SendMail",

        // Documentation
        Pair(HttpMethod.GET.name(), "/manage/openapi") to "GetOpenApi",
        Pair(HttpMethod.GET.name(), "/manage/swagger-ui") to "GetSwaggerUi",

        // Authentication
        Pair(HttpMethod.POST.name(), "/auth/login") to "Login",
        Pair(HttpMethod.POST.name(), "/auth/logout") to "Logout",
        Pair(HttpMethod.POST.name(), "/auth/admin/tokens") to "RefreshAuthentication",

        // Users - Creation
        Pair(HttpMethod.POST.name(), "/users/{username}") to "CreateUser",
        Pair(HttpMethod.POST.name(), "/users/{username}/activation") to "ActivateUser",
        Pair(HttpMethod.GET.name(), "/users/{username}/tokens/activation") to "SendUserActivationToken",

        // Users - Deletion
        Pair(HttpMethod.DELETE.name(), "/users/{username}") to "DeleteUser",
        Pair(HttpMethod.GET.name(), "/users/{username}/tokens/deletion") to "SendUserDeletionToken",

        // Users - Password
        Pair(HttpMethod.PATCH.name(), "/users/{username}/password") to "ResetPassword",
        Pair(HttpMethod.GET.name(), "/users/{username}/tokens/password") to "SendPasswordResetToken",

        // Users - Profile
        Pair(HttpMethod.GET.name(), "/users/{username}/profile") to "GetUserProfile",
        Pair(HttpMethod.PATCH.name(), "/users/{username}/profile") to "UpdateUserProfile",
        Pair(HttpMethod.DELETE.name(), "/users/{username}/picture") to "DeleteUserPicture",
        Pair(HttpMethod.PATCH.name(), "/users/{username}/picture") to "UpdateUserPicture",

        // Users - Settings
        Pair(HttpMethod.GET.name(), "/users/{username}/setting") to "GetUserSettings",
        Pair(HttpMethod.PATCH.name(), "/users/{username}/settings") to "UpdateUserSettings",

        // Simple
        Pair(HttpMethod.GET.name(), "/simple/outcome") to "GetOutcome",
        Pair(HttpMethod.GET.name(), "/simple/greetings") to "GetGreetings",
    )

    fun getOperationName(method: String, uri: String): String {
        return OPERATIONS.getOrDefault(
            Pair(method, uri),
            getDefaultOperationName(method = method, uri = uri),
        )
    }

    private fun getDefaultOperationName(method: String, uri: String): String = "$method:$uri"
}
