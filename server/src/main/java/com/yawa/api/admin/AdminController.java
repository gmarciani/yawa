package com.yawa.api.admin;

import com.yawa.models.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@Slf4j
public class AdminController {

    @GetMapping("/hello")
    public String hello(Authentication authentication) {
        log.info("Called AdminController.hello");
        User user = (User) authentication.getPrincipal();
        return String.format("Hello %s", user.getUsername());
    }
}
