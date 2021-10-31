package com.yawa.server.api.auth

import com.yawa.server.models.users.User
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.mockk
import org.springframework.security.core.Authentication

class GetAuthenticatedHelloTest : BehaviorSpec({
    given(GetAuthenticatedHello::class.simpleName!!) {
        val subject = GetAuthenticatedHello()

        val authentication = mockk<Authentication>(relaxed = true)

        `when`("getAuthenticatedHello is called") {

            and("caller is authenticated") {
                every { authentication.principal } returns mockk<User>(relaxed = true).also {
                    every { it.username } returns "CALLER_USERNAME"
                }

                then("returns the expected response") {
                    val response = subject.getAuthenticatedHello(authentication)
                    response shouldBe GetAuthenticatedHello.Response(message = "Hello CALLER_USERNAME")
                }
            }
        }
    }
})
