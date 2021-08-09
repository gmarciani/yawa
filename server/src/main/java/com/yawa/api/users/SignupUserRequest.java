package com.yawa.api.users;

import com.yawa.validators.Password;
import com.yawa.validators.Username;
import lombok.Data;

@Data
public class SignupUserRequest {

    @Username
    private String username;

    @Password
    private String password;
}
