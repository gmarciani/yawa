package com.yawa.server.validators

import java.util.regex.Pattern
import javax.validation.Constraint
import javax.validation.ConstraintValidator
import javax.validation.ConstraintValidatorContext
import javax.validation.Payload
import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
@MustBeDocumented
@Constraint(validatedBy = [RegularStringValidator::class])
annotation class RegularString(
    val message: String = "{com.yawa.server.validators.RegularStringValidator.VALIDATION_ERROR_MESSAGE}",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = []
)

class RegularStringValidator : ConstraintValidator<RegularString, String> {

    val MIN_SIZE = 1
    val MAX_SIZE = 50
    val PATTERN : Pattern = Pattern.compile("^.{$MIN_SIZE,$MAX_SIZE}$")
    val VALIDATION_ERROR_MESSAGE = "Invalid value: must be a string between $MIN_SIZE and $MAX_SIZE characters"

    override fun isValid(value: String, context: ConstraintValidatorContext): Boolean =
        PATTERN.matcher(value).matches()
}
