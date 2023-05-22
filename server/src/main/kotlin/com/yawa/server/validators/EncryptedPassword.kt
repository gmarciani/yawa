package com.yawa.server.validators

import java.util.regex.Pattern
import jakarta.validation.Constraint
import jakarta.validation.ConstraintValidator
import jakarta.validation.ConstraintValidatorContext
import jakarta.validation.Payload
import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
@MustBeDocumented
@Constraint(validatedBy = [EncryptedPasswordValidator::class])
annotation class EncryptedPassword(
    val message: String = "{com.yawa.server.validators.EncryptedPasswordValidator.VALIDATION_ERROR_MESSAGE}",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = []
)

class EncryptedPasswordValidator : ConstraintValidator<EncryptedPassword, String> {

    val MIN_SIZE = 3
    val MAX_SIZE = 100
    val PATTERN : Pattern = Pattern.compile("^.{$MIN_SIZE,$MAX_SIZE}$")
    val VALIDATION_ERROR_MESSAGE = "Invalid password: must be a string between $MIN_SIZE and $MAX_SIZE characters"

    override fun isValid(value: String, context: ConstraintValidatorContext): Boolean =
        PATTERN.matcher(value).matches()
}
