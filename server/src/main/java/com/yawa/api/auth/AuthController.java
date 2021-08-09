package com.yawa.api.auth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.yawa.exceptions.NotAuthorizedException;
import com.yawa.models.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@Slf4j
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest request) {
        log.info("Called AuthController.login: {}", request);
        try {
            Authentication authenticate = authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    request.getUsername(), request.getPassword()));

            User user = (User) authenticate.getPrincipal();

            log.info("Authenticated user: {}", user);

            String token = JWT.create()
                    .withClaim("username", user.getUsername())
                    .sign(Algorithm.HMAC256("secret"));

            log.info("Authentication token: {}", token);

            return new LoginResponse(token, "Successfully logged in");
        } catch (BadCredentialsException ex) {
            throw new NotAuthorizedException("Cannot log in");
        }
    }

    @PostMapping("/logout")
    @ResponseBody
    public String logout(Authentication authentication) {
        log.info("Called AuthController.logout");
        User user = (User) authentication.getPrincipal();
        return String.format("Bye %s", user.getUsername());
    }
}
