package com.yawa.api.users;

import com.yawa.validators.Password;
import com.yawa.validators.Username;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class CreateUserRequest {

    @Username
    private String username;

    @Password
    private String password;

    @NotBlank()
    @Size(min = 3, max = 10)
    private String role;
}
