package com.yawa.server.models.users

import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.collections.shouldContainExactly
import org.springframework.security.core.authority.SimpleGrantedAuthority

class UserRoleTest : BehaviorSpec({
    given(UserRole::class.simpleName!!) {

        UserRole.values().forEach { role ->
            `when`("toAuthority is called for role $role") {
                val authorities = role.toAuthorities()
                then("it should return the corresponding authority") {
                    authorities shouldContainExactly setOf(SimpleGrantedAuthority("ROLE_${role.name}"))
                }
            }
        }
    }
})
