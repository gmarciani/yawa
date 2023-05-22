package com.yawa.server.validators

import java.util.regex.Pattern
import jakarta.validation.Constraint
import jakarta.validation.ConstraintValidator
import jakarta.validation.ConstraintValidatorContext
import jakarta.validation.Payload
import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
@MustBeDocumented
@Constraint(validatedBy = [EmailValidator::class])
annotation class Email(
    val message: String = "{com.yawa.server.validators.EmailValidator.VALIDATION_ERROR_MESSAGE}",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = []
)

class EmailValidator : ConstraintValidator<Email, String> {

    val PATTERN : Pattern = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE)
    val VALIDATION_ERROR_MESSAGE = "Invalid email: must be a string following the standard email pattern, like me@myself.com"

    override fun isValid(value: String, context: ConstraintValidatorContext): Boolean =
        PATTERN.matcher(value).matches()
}
