package com.yawa.server.api.auth

import com.yawa.server.models.tokens.AuthenticationTokens
import com.yawa.server.models.users.User
import com.yawa.server.security.authentication.AuthenticationService
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.mockk
import org.springframework.security.core.AuthenticationException
import java.time.Instant

class LoginTest : BehaviorSpec({
    given(LoginTest::class.simpleName!!) {
        val authenticationService = mockk<AuthenticationService>(relaxed = true)

        val subject = Login(authenticationService)
        val username = "A_USERNAME"
        val password = "A_PASSWORD"

        `when`("login is called") {

            val loginRequest = Login.LoginRequest(username = username, password = password)

            and("caller is authenticated") {
                val user = mockk<User>(relaxed = true)
                every { authenticationService.authenticate(username = username, password = password) } returns user.also {
                    every { it.username } returns username
                    every { it.password } returns password
                }

                and("authentication tokens generated") {
                    val authenticationTokens = mockk<AuthenticationTokens>(relaxed = true).also {
                        every { it.accessToken } returns "ACCESS_TOKEN"
                        every { it.accessTokenExpiration } returns Instant.ofEpochMilli(1)
                        every { it.refreshToken } returns "REFRESH_TOKEN"
                        every { it.refreshTokenExpiration } returns Instant.ofEpochMilli(100)

                    }
                    every { authenticationService.generateAuthenticationTokens(user = user) } returns authenticationTokens

                    then("returns the expected response") {
                        val response = subject.login(loginRequest)
                        response shouldBe Login.LoginResponse(
                            username = loginRequest.username,
                            accessToken = authenticationTokens.accessToken,
                            accessTokenExpiration = authenticationTokens.accessTokenExpiration,
                            refreshToken = authenticationTokens.refreshToken,
                            refreshTokenExpiration = authenticationTokens.refreshTokenExpiration
                        )
                    }
                }
            }

            and("caller is not authenticated") {
                val authenticationException = mockk<AuthenticationException>().also {
                    every { it.message } returns "EXCEPTION_MESSAGE"
                }
                every { authenticationService.authenticate(username = username, password = password) } throws authenticationException

                then("returns failure") {
                    val exception = shouldThrow<AuthenticationException> {
                        subject.login(loginRequest)
                    }
                    exception.message shouldBe authenticationException.message
                }
            }
        }
    }
})
