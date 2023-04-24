package com.yawa.server.api.auth

import com.yawa.server.components.security.JwtIssuer
import com.yawa.server.exceptions.NotAuthorizedException
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.mockk
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.core.Authentication

class LoginTest : BehaviorSpec({
    given(LoginTest::class.simpleName!!) {
        val authenticationManager = mockk<AuthenticationManager>(relaxed = true)
        val jwtIssuer = mockk<JwtIssuer>(relaxed = true)

        val subject = Login(authenticationManager, jwtIssuer)

        `when`("login is called") {

            val request = Login.Request(username = "A_USERNAME", password = "A_PASSWORD")

            and("caller is authenticated") {
                every { authenticationManager.authenticate(any()) } returns mockk<Authentication>(relaxed = true).also {
                    every { it.principal } returns mockk<org.springframework.security.core.userdetails.User>(relaxed = true).also {
                        every { it.username } returns "A_USERNAME"
                    }
                }

                every { jwtIssuer.issue(any()) } returns "A_JWT_TOKEN"

                then("returns the expected response") {
                    val response = subject.login(request)
                    response shouldBe Login.Response(token = "A_JWT_TOKEN", message = "Successfully logged in as A_USERNAME")
                }
            }

            and("caller is not authenticated") {
                every { authenticationManager.authenticate(any()) } throws mockk<BadCredentialsException>()

                then("returns failure") {
                    val exception = shouldThrow<NotAuthorizedException> {
                        subject.login(request)
                    }
                    exception.message shouldBe "Cannot log in"
                }
            }
        }
    }
})
