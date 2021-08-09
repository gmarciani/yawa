package com.yawa.api.users;

import com.yawa.validators.Password;
import com.yawa.validators.Role;
import com.yawa.validators.Username;
import lombok.Data;

@Data
public class CreateUserRequest {

    @Username
    private String username;

    @Password
    private String password;

    @Role
    private String role;
}
