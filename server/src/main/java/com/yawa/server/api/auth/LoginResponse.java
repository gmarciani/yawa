package com.yawa.server.api.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data()
@AllArgsConstructor
public class LoginResponse {
    private String token;
    private String message;
}
