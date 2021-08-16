package com.yawa.config;

import org.springframework.stereotype.Component;

@Component
public class AppConfigurationProvider {

    public String getProperty(String name) {
        return System.getProperty(name);
    }
}
