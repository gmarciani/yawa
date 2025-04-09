package com.yawa.server.api.simple

import com.yawa.server.models.users.User
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.mockk
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.core.context.SecurityContextHolder
import java.util.UUID

class GetGreetingsTest : BehaviorSpec({
    given(GetGreetings::class.simpleName!!) {
        val subject = GetGreetings()

        val securityContext = mockk<SecurityContext>(relaxed = true).also {
            SecurityContextHolder.setContext(it)
        }

        `when`("getAuthenticatedHello is called") {

            and("caller is authenticated as anonymous") {
                every { securityContext.authentication } returns mockk<AnonymousAuthenticationToken>(relaxed = true)

                then("returns the expected response") {
                    val response = subject.getGreetings()
                    response shouldBe GetGreetings.GetAuthenticatedHelloResponse(message = "Hello ANONYMOUS")
                }
            }

            and("caller is authenticated as a concrete principal") {
                val userId = UUID.randomUUID()
                every { securityContext.authentication } returns mockk<Authentication>(relaxed = true).also {
                    every { it.principal } returns mockk<User>(relaxed = true).also {
                        every { it.id } returns userId
                    }
                }

                then("returns the expected response") {
                    val response = subject.getGreetings()
                    response shouldBe GetGreetings.GetAuthenticatedHelloResponse(message = "Hello $userId")
                }
            }
        }
    }
})
