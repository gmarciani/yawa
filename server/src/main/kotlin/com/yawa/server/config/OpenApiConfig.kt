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
import io.swagger.v3.oas.models.responses.ApiResponse
import io.swagger.v3.oas.models.responses.ApiResponses
import io.swagger.v3.oas.models.security.SecurityRequirement
import io.swagger.v3.oas.models.security.SecurityScheme
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
}
