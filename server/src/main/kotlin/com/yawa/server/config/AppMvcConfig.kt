package com.yawa.server.config

import com.yawa.server.components.mvc.interceptors.AccessLogger
import com.yawa.server.components.mvc.interceptors.RequestIdAssigner
import com.yawa.server.components.mvc.interceptors.RequestOperationNameAssigner
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.stereotype.Component
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Component
class AppMvcConfig(
    @Autowired val requestIdAssigner: RequestIdAssigner,
    @Autowired val requestOperationNameAssigner: RequestOperationNameAssigner,
    @Autowired val accessLogger: AccessLogger
): WebMvcConfigurer {

    override fun configureContentNegotiation(configurer: ContentNegotiationConfigurer) {
        super.configureContentNegotiation(configurer)
        configurer.defaultContentType(MediaType.APPLICATION_JSON)
    }

    override fun addInterceptors(registry: InterceptorRegistry) {
        registry.addInterceptor(requestIdAssigner)
        registry.addInterceptor(requestOperationNameAssigner)
        registry.addInterceptor(accessLogger)
    }
}
