package com.yawa.server.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class RegularStringValidator implements ConstraintValidator<RegularString, String> {

    private static final int MIN_SIZE = 1;
    private static final int MAX_SIZE = 50;
    private static final Pattern PATTERN = Pattern.compile(String.format("^.{%d,%d}$", MIN_SIZE, MAX_SIZE));

    public static final String VALIDATION_ERROR_MESSAGE =
            "Invalid value: must be a string between " + MIN_SIZE + " and " + MAX_SIZE + " characters";

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return PATTERN.matcher(value).matches();
    }
}
