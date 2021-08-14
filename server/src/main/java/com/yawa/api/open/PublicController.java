package com.yawa.api.open;

import com.yawa.exceptions.NotAuthorizedException;
import io.micrometer.core.instrument.MeterRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

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

    @GetMapping("/random")
    public String random() {
        log.info("Called PublicController.random");
        float dice = new Random().nextFloat();
        if (dice <= 6.0/10) {
            return "Success";
        } else if (dice <= 9.0/10) {
            throw new NotAuthorizedException("Fake client error");
        } else {
            throw new RuntimeException("Fake internal error");
        }
    }
}
