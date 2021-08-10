package com.yawa.api.open;

import io.micrometer.core.instrument.MeterRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/open")
@Slf4j
public class PublicController {

    @Autowired
    private MeterRegistry meterRegistry;

    @GetMapping("/hello")
    public String hello() {
        log.info("Called PublicController.hello");
        meterRegistry.counter("yawa_custom_counter").increment();
        return "Hello whoever you are, this is a public page";
    }
}
