package com.yawa.server.validators

import com.yawa.server.models.users.UserSubscriptionPlan
import org.apache.commons.lang3.StringUtils
import java.util.regex.Pattern
import jakarta.validation.Constraint
import jakarta.validation.ConstraintValidator
import jakarta.validation.ConstraintValidatorContext
import jakarta.validation.Payload
import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
@MustBeDocumented
@Constraint(validatedBy = [SubscriptionPlanValidator::class])
annotation class SubscriptionPlan(
    val message: String = "{com.yawa.server.validators.SubscriptionPlanValidator.VALIDATION_ERROR_MESSAGE}",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Payload>> = []
)

class SubscriptionPlanValidator : ConstraintValidator<SubscriptionPlan, String> {

    val PATTERN : Pattern = Pattern.compile("^${StringUtils.join(UserSubscriptionPlan.values(), "|")}$")
    val VALIDATION_ERROR_MESSAGE = "Invalid subscription plan: must be one of ${UserSubscriptionPlan.values()}"

    override fun isValid(value: String, context: ConstraintValidatorContext): Boolean =
        PATTERN.matcher(value).matches()
}
