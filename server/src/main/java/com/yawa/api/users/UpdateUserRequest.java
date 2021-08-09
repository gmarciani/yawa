package com.yawa.api.users;

import com.yawa.validators.Password;
import lombok.Data;

@Data
public class UpdateUserRequest {

    @Password
    private String password;
}
