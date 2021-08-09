package com.yawa.api.open;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/open")
@Slf4j
public class PublicController {

    @GetMapping("/hello")
    public String hello() {
        log.info("Called PublicController.hello");
        return "Hello whoever you are, this is a public page";
    }
}
