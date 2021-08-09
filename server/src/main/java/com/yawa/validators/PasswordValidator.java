package com.yawa.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class PasswordValidator implements ConstraintValidator<Password, String> {

    private static final int MIN_SIZE = 3;
    private static final int MAX_SIZE = 30;
    private static final Pattern PATTERN = Pattern.compile(String.format("^.{%d,%d}$", MIN_SIZE, MAX_SIZE));

    public static final String VALIDATION_ERROR_MESSAGE =
            "Invalid password: must be a string between 3 and 30 characters";

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return PATTERN.matcher(value).matches();
    }
}