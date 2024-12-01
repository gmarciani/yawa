package com.yawa.server.utils

import org.springframework.http.HttpMethod
import org.springframework.http.HttpMethod.*
import org.springframework.stereotype.Component

@Component
class OperationNameProvider {

    val OPERATIONS = mapOf(
        // Admin - Server
        OperationQualifier(GET, "/manage/configprops") to "GetConfig",
        OperationQualifier(GET, "/manage/env") to "GetEnv",
        OperationQualifier(GET, "/manage/health") to "GetHealth",
        OperationQualifier(GET, "/manage/info") to "GetInfo",
        OperationQualifier(GET, "/manage/mappings") to "GetMappings",
        OperationQualifier(GET, "/manage/metrics/.*") to "GetMetrics",
        OperationQualifier(GET, "/manage/prometheus") to "GetPrometheus",
        OperationQualifier(POST, "/manage/shutdown") to "ManageShutdown",

        // Admin - Email
        OperationQualifier(POST, "/admin/mail") to "SendMail",

        // Documentation
        OperationQualifier(GET, "/docs/openapi") to "GetOpenApi",
        OperationQualifier(GET, "/docs/openapi/swagger-config") to "GetSwaggerConfig",
        OperationQualifier(GET, "/docs/openapi-ui") to "GetSwaggerUi",
        OperationQualifier(GET, "/docs/swagger-ui/.*") to "GetSwaggerUiAssets",

        // Authentication
        OperationQualifier(POST, "/auth/login") to "Login",
        OperationQualifier(POST, "/auth/logout") to "Logout",
        OperationQualifier(POST, "/auth/.*/tokens") to "RefreshAuthentication",

        // Users - Creation
        OperationQualifier(POST, "/users/.*") to "CreateUser",
        OperationQualifier(POST, "/users/.*/activation") to "ActivateUser",
        OperationQualifier(GET, "/users/.*/tokens/activation") to "SendUserActivationToken",

        // Users - Deletion
        OperationQualifier(DELETE, "/users/.*") to "DeleteUser",
        OperationQualifier(GET, "/users/.*/tokens/deletion") to "SendUserDeletionToken",

        // Users - Password
        OperationQualifier(PATCH, "/users/.*/password") to "ResetPassword",
        OperationQualifier(GET, "/users/.*/tokens/password") to "SendPasswordResetToken",

        // Users - Profile
        OperationQualifier(GET, "/users/.*/profile") to "GetUserProfile",
        OperationQualifier(PATCH, "/users/.*/profile") to "UpdateUserProfile",
        OperationQualifier(DELETE, "/users/.*/picture") to "DeleteUserPicture",
        OperationQualifier(PATCH, "/users/.*/picture") to "UpdateUserPicture",

        // Users - Settings
        OperationQualifier(GET, "/users/.*/setting") to "GetUserSettings",
        OperationQualifier(PATCH, "/users/.*/settings") to "UpdateUserSettings",

        // Simple
        OperationQualifier(GET, "/simple/outcome") to "GetOutcome",
        OperationQualifier(GET, "/simple/greetings") to "GetGreetings",
    )

    fun getOperationName(method: String, uri: String): String {
        OPERATIONS.forEach { (qualifier, operationName) ->
            if (qualifier.matches(method = method, uri = uri)) {
                return operationName
            }
        }
        return getDefaultOperationName(method = method, uri = uri)
    }

    private fun getDefaultOperationName(method: String, uri: String): String = "$method:$uri"
}

class OperationQualifier(
    val method: HttpMethod,
    val uri: String) {
    fun matches(method: String, uri: String): Boolean {
        return this.method.name() == method && Regex(this.uri).matches(uri)
    }
}
