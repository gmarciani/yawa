package com.yawa.server.models.users

import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.mockk
import org.springframework.security.core.GrantedAuthority
import java.time.Instant
/*
class UserTest : BehaviorSpec({
    given(User::class.simpleName!!) {
        val authorities = mutableSetOf<GrantedAuthority>()
        val role = mockk<UserRole>(relaxed = true).also {
            every { it.toAuthorities() } returns authorities
        }

        val user = User(
            email = "ANY@EMAIL.COM",
            password = "ANY_PASSWORD",
            role = role,
            isEnabled = true,
            isAccountNonExpired = true,
            isCredentialsNonExpired = true,
            isAccountNonLocked = true,
            createdAt = Instant.parse("1990-06-27T15:30:00.00Z"),
        )

        `when`("userPrincipal is called") {
            val userPrincipal = user.userPrincipal()

            then("it should return the expected user details") {
                userPrincipal.username shouldBe "ANY_USERNAME"
                userPrincipal.password shouldBe "ANY_PASSWORD"
                userPrincipal.authorities shouldBe authorities
                userPrincipal.isEnabled shouldBe true
                userPrincipal.isAccountNonExpired shouldBe true
                userPrincipal.isCredentialsNonExpired shouldBe true
                userPrincipal.isAccountNonLocked shouldBe true
            }
        }
    }
})
*/
