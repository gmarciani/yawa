package com.yawa.server.api.open;

import com.yawa.server.exceptions.NotAuthorizedException;
import com.yawa.server.exceptions.ResourceNotFoundException;
import com.yawa.server.exceptions.YawaDatabaseInternalException;
import com.yawa.server.exceptions.YawaInternalException;
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
    public GetRandomOutcomeResponse random() {
        log.info("Called PublicController.random");
        float dice = new Random().nextFloat();
        if (dice <= 6.0/10) {
            log.info("Will return success");
            return new GetRandomOutcomeResponse("Success");
        } else if (dice <= 7.5/10) {
            log.warn("Will return client error: unauthorized");
            throw new NotAuthorizedException("Fake client error");
        } else if (dice <= 9.0/10) {
            log.warn("Will return client error: resource not found");
            throw new ResourceNotFoundException("Fake client error");
        } else if (dice <= 9.5/10) {
            log.warn("Will return server error: db error");
            throw new YawaDatabaseInternalException("Fake server error");
        } else {
            log.error("Will return server error: generic internal error");
            throw new YawaInternalException("Fake server error");
        }
    }
}
