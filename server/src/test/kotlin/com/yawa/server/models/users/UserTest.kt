package com.yawa.server.models.users

import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.mockk
import org.springframework.security.core.GrantedAuthority
import java.time.Instant

class UserTest : BehaviorSpec({
    given(User::class.simpleName!!) {
        val authorities = mutableSetOf<GrantedAuthority>()
        val role = mockk<UserRole>(relaxed = true).also {
            every { it.toAuthorities() } returns authorities
        }

        val user = User(
            username = "ANY_USERNAME",
            email = "ANY@EMAIL.COM",
            password = "ANY_PASSWORD",
            role = role,
            isEnabled = true,
            isAccountNonExpired = true,
            isCredentialsNonExpired = true,
            isAccountNonLocked = true,
            createdAt = Instant.parse("1990-06-27T15:30:00.00Z")
        )

        `when`("toUserDetails is called") {
            val userDetails = user.toUserDetails()

            then("it should return the expected user details") {
                userDetails.username shouldBe "ANY_USERNAME"
                userDetails.password shouldBe "ANY_PASSWORD"
                userDetails.authorities shouldBe authorities
                userDetails.isEnabled shouldBe true
                userDetails.isAccountNonExpired shouldBe true
                userDetails.isCredentialsNonExpired shouldBe true
                userDetails.isAccountNonLocked shouldBe true
            }
        }
    }
})
