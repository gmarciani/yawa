package com.yawa.server.api.users;

import com.yawa.server.validators.Password;
import com.yawa.server.validators.Username;
import lombok.Data;

@Data
public class SignupUserRequest {

    @Username
    private String username;

    @Password
    private String password;
}
