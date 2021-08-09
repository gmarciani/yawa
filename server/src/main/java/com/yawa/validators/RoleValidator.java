package com.yawa.validators;

import com.yawa.models.UserRoles;
import org.apache.commons.lang3.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class RoleValidator implements ConstraintValidator<Role, String> {

    private static final Pattern PATTERN = Pattern.compile(
            String.format("^%s$", StringUtils.join(UserRoles.ALL_ROLES, "|")));

    public static final String VALIDATION_ERROR_MESSAGE =
            "Invalid role: must be one of " + UserRoles.ADMIN + ", " + UserRoles.NORMAL;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return PATTERN.matcher(value).matches();
    }
}