package com.yawa.server.api.auth;

import com.yawa.server.validators.Password;
import com.yawa.server.validators.Username;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginRequest {

    @Username
    private String username;

    @Password
    private String password;
}
