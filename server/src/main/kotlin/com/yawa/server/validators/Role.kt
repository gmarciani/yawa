package com.yawa.server.validators

import com.yawa.server.models.users.UserRole
import org.apache.commons.lang3.StringUtils
import java.util.regex.Pattern
import javax.validation.Constraint
import javax.validation.ConstraintValidator
import javax.validation.ConstraintValidatorContext
import javax.validation.Payload
import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
@MustBeDocumented
@Constraint(validatedBy = [RoleValidator::class])
annotation class Role(
    val message: String = "{com.yawa.server.validators.RoleValidator.VALIDATION_ERROR_MESSAGE}",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = []
)

class RoleValidator : ConstraintValidator<Role, String> {

    val PATTERN : Pattern = Pattern.compile("^${StringUtils.join(UserRole.values(), "|")}$")
    val VALIDATION_ERROR_MESSAGE = "Invalid role: must be one of ${UserRole.values()}"

    override fun isValid(value: String, context: ConstraintValidatorContext): Boolean =
        PATTERN.matcher(value).matches()
}
