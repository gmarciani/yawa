package com.yawa.server.components.mvc;

import com.yawa.server.components.mvc.interceptors.AccessLogger;
import com.yawa.server.components.mvc.interceptors.RequestIdAssigner;
import com.yawa.server.components.mvc.interceptors.RequestOperationNameAssigner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
public class AppMvcConfig implements WebMvcConfigurer {

    @Autowired
    RequestIdAssigner requestIdAssigner;

    @Autowired
    RequestOperationNameAssigner requestOperationNameAssigner;

    @Autowired
    AccessLogger accessLogger;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(requestIdAssigner);
        registry.addInterceptor(requestOperationNameAssigner);
        registry.addInterceptor(accessLogger);
    }
}
