package com.yawa.api.auth;

import com.yawa.validators.Password;
import com.yawa.validators.Username;
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
