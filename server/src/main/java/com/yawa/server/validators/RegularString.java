package com.yawa.server.validators;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({ FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = RegularStringValidator.class)
@Documented
public @interface RegularString {

    String message() default RegularStringValidator.VALIDATION_ERROR_MESSAGE;

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

}
