package com.yawa.server.api.users;

import com.yawa.server.validators.Password;
import lombok.Data;

@Data
public class UpdateUserRequest {

    @Password
    private String password;
}
