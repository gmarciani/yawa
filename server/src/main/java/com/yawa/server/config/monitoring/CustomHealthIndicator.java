package com.yawa.server.config.monitoring;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class CustomHealthIndicator implements HealthIndicator {

    @Override
    public Health health() {
        Map<String, String> details = new HashMap<>();
        details.put("CHECK_1", check1());
        details.put("CHECK_2", check2());

        if (details.containsValue("ERROR")) {
            return Health.down().withDetails(details).build();
        }

        return Health.up().withDetails(details).build();
    }

    private String check1() {
        return "OK";
    }

    private String check2() {
        return "OK";
    }
}
