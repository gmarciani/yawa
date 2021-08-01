package com.yawa.models.dto;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
public class UserDto {
    private String password;
}
