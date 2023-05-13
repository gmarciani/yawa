package com.yawa.server.api.auth

import com.yawa.server.security.authentication.JwtService
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
        val jwtService = mockk<JwtService>(relaxed = true)

        val subject = Login(authenticationManager, jwtService)

        `when`("login is called") {

            val loginRequest = Login.LoginRequest(username = "A_USERNAME", password = "A_PASSWORD")

            and("caller is authenticated") {
                every { authenticationManager.authenticate(any()) } returns mockk<Authentication>(relaxed = true).also {
                    every { it.principal } returns mockk<org.springframework.security.core.userdetails.User>(relaxed = true).also {
                        every { it.username } returns "A_USERNAME"
                    }
                }

                every { jwtService.issue(any()) } returns "A_JWT_TOKEN"

                then("returns the expected response") {
                    val response = subject.login(loginRequest)
                    response shouldBe Login.LoginResponse(token = "A_JWT_TOKEN", message = "Successfully logged in as A_USERNAME")
                }
            }

            and("caller is not authenticated") {
                every { authenticationManager.authenticate(any()) } throws mockk<BadCredentialsException>()

                then("returns failure") {
                    val exception = shouldThrow<NotAuthorizedException> {
                        subject.login(loginRequest)
                    }
                    exception.message shouldBe "Cannot log in"
                }
            }
        }
    }
})
