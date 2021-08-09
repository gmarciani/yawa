package com.yawa.api.users;

import lombok.Data;

@Data
public class SignupUserRequest {
    private String username;
    private String password;
}
