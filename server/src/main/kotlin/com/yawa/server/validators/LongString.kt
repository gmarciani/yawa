package com.yawa.server.validators

import org.apache.commons.lang3.StringUtils
import java.util.regex.Pattern
import javax.validation.Constraint
import javax.validation.ConstraintValidator
import javax.validation.ConstraintValidatorContext
import javax.validation.Payload
import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
@MustBeDocumented
@Constraint(validatedBy = [LongStringValidator::class])
annotation class LongString(
    val message: String = "{com.yawa.server.validators.LongStringValidatorValidator.VALIDATION_ERROR_MESSAGE}",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = []
)

class LongStringValidator : ConstraintValidator<LongString, String> {

    val MIN_SIZE = 0
    val MAX_SIZE = 1000
    val PATTERN : Pattern = Pattern.compile("^.{$MIN_SIZE,$MAX_SIZE}$")
    val VALIDATION_ERROR_MESSAGE = "Invalid value: must be a string between $MIN_SIZE and $MAX_SIZE characters"

    override fun isValid(value: String, context: ConstraintValidatorContext): Boolean =
        StringUtils.isBlank(value) || PATTERN.matcher(value).matches()
}
