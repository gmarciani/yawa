package com.yawa.server.api.open

import com.yawa.server.api.simple.GetRandomOutcome
import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.exceptions.YawaDatabaseInternalException
import com.yawa.server.exceptions.YawaInternalException
import io.kotest.assertions.throwables.shouldThrowExactly
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.spyk

class GetRandomOutcomeTest : BehaviorSpec({
    given(GetRandomOutcome::class.simpleName!!) {
        val subject = spyk<GetRandomOutcome>(recordPrivateCalls = true)

        `when`("getRandomOutcome is called") {

            and("the random number is <= ${6.0/10}") {
                every { subject["random"]() } returns 6.0/10

                then("it returns a successful response") {
                    val response = subject.getRandomOutcome()
                    response shouldBe GetRandomOutcome.GetRandomOutcomeResponse("Success")
                }
            }

            and("the random number is <= ${7.5/10}") {
                every { subject["random"]() } returns 7.5/10

                then("it returns a NotAuthorizedException exception") {
                    shouldThrowExactly<NotAuthorizedException> { subject.getRandomOutcome() }
                }
            }

            and("the random number is <= ${9.0/10}") {
                every { subject["random"]() } returns 9.0/10

                then("it returns a ResourceNotFoundException exception") {
                    shouldThrowExactly<ResourceNotFoundException> { subject.getRandomOutcome() }
                }
            }

            and("the random number is <= ${9.5/10}") {
                every { subject["random"]() } returns 9.5/10

                then("it returns a YawaDatabaseInternalException exception") {
                    shouldThrowExactly<YawaDatabaseInternalException> { subject.getRandomOutcome() }
                }
            }

            and("the random number is > ${9.5/10}") {
                every { subject["random"]() } returns 9.6/10

                then("it returns a YawaInternalException exception") {
                    shouldThrowExactly<YawaInternalException> { subject.getRandomOutcome() }
                }
            }
        }
    }
})
