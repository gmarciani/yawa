package com.yawa.server.validators

import java.util.regex.Pattern
import javax.validation.Constraint
import javax.validation.ConstraintValidator
import javax.validation.ConstraintValidatorContext
import javax.validation.Payload
import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
@MustBeDocumented
@Constraint(validatedBy = [PasswordValidator::class])
annotation class Password(
    val message: String = "{com.yawa.server.validators.PasswordValidator.VALIDATION_ERROR_MESSAGE}",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = []
)

class PasswordValidator : ConstraintValidator<Password, String> {

    val MIN_SIZE = 3
    val MAX_SIZE = 30
    val PATTERN : Pattern = Pattern.compile("^.{$MIN_SIZE,$MAX_SIZE}$")
    val VALIDATION_ERROR_MESSAGE = "Invalid password: must be a string between $MIN_SIZE and $MAX_SIZE characters"

    override fun isValid(value: String, context: ConstraintValidatorContext) : Boolean = PATTERN.matcher(value).matches()
}
