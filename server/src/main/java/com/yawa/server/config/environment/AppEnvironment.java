package com.yawa.server.config.environment;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
public class AppEnvironment {

    @Value("${yawa.stack}")
    private String stack;

    @Value("${yawa.region}")
    private String region;

    @Value("${yawa.application}")
    private String application;

    @Value("${yawa.component}")
    private String component;
}
