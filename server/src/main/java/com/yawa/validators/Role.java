package com.yawa.validators;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({ FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = RoleValidator.class)
@Documented
public @interface Role {

    String message() default RoleValidator.VALIDATION_ERROR_MESSAGE;

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

}

