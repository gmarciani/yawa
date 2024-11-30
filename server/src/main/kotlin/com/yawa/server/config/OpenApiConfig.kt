package com.yawa.server.config

import io.swagger.v3.oas.models.Components
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.Operation
import io.swagger.v3.oas.models.PathItem
import io.swagger.v3.oas.models.info.Contact
import io.swagger.v3.oas.models.info.Info
import io.swagger.v3.oas.models.info.License
import io.swagger.v3.oas.models.media.Content
import io.swagger.v3.oas.models.media.MediaType
import io.swagger.v3.oas.models.media.ObjectSchema
import io.swagger.v3.oas.models.media.Schema
import io.swagger.v3.oas.models.responses.ApiResponse
import io.swagger.v3.oas.models.responses.ApiResponses
import io.swagger.v3.oas.models.security.SecurityRequirement
import io.swagger.v3.oas.models.security.SecurityScheme
import org.springdoc.core.customizers.OpenApiCustomizer
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class OpenApiConfig {

    val SECURITY_REQUIREMENT: String = "bearerAuth"

    @Bean
    fun openApi(): OpenAPI {
        return OpenAPI()
            .info(
                Info()
                    .title("YAWA")
                    .description("Yet another Web Application")
                    .version("1.0.0")
                    .license(
                        License()
                            .name("MIT License")
                            .url("https://opensource.org/license/mit"),
                    )
                    .contact(
                        Contact()
                            .name("Giacomo Marciani")
                            .url("https://github.com/gmarciani/yawa"),
                    ),
            )
            .addSecurityItem(
                SecurityRequirement().addList(SECURITY_REQUIREMENT),
            )
            .components(
                Components().addSecuritySchemes(
                    SECURITY_REQUIREMENT,
                    SecurityScheme()
                        .type(SecurityScheme.Type.HTTP)
                        .bearerFormat("JWT")
                        .scheme("bearer"),
                ),
            )
            .path(
                "/docs/openapi",
                PathItem()
                    .get(
                        Operation()
                            .summary("Actuator web endpoint 'docs/openapi'")
                            .operationId("openapi")
                            .tags(listOf("Actuator"))
                            .responses(
                                ApiResponses().addApiResponse(
                                    "200",
                                    ApiResponse()
                                        .description("OK")
                                        .content(
                                            Content().addMediaType(
                                                "application/json",
                                                MediaType().schema(ObjectSchema()),
                                            ),
                                        ),
                                ),
                            ),
                    ),
            )
    }

    @Bean
    fun nullableCustomizer(): OpenApiCustomizer? {
        /* This customizer is required because nullable attributes in Kotlin are not processed correctly by SpringDoc.
         * The customizer sets 'nullable = true' in OpenAPI for those properties corresponding to nullable attributes in Kotlin.
         * Without this customizer, all nullable Kotlin attribute must be annotated with @field:Schema(nullable = true)
         * to be considered nullable in OpenAPI.
         * See https://github.com/springdoc/springdoc-openapi/issues/906
         */
        return OpenApiCustomizer { openAPI: OpenAPI ->
            openAPI.components.schemas.values.stream().filter { schema: Schema<*> -> "object" == schema.type }
                .forEach { schema: Schema<*> ->
                    schema.properties.entries.stream()
                        .filter { prop: Map.Entry<String, Schema<*>> ->
                            schema.required == null ||
                                !schema.required.contains(prop.key)
                        }
                        .forEach { entry: Map.Entry<String, Schema<*>> -> entry.value.setNullable(true) }
                }
        }
    }
}
