package com.yawa.server.api.simple

import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.exceptions.YawaBadRequestException
import com.yawa.server.exceptions.YawaInternalException
import io.kotest.assertions.throwables.shouldThrowExactly
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.spyk

class GetOutcomeTest : BehaviorSpec({
    given(GetOutcome::class.simpleName!!) {
        val subject = spyk<GetOutcome>(recordPrivateCalls = true)

        `when`("GetDeterministicOutcome is called") {

            and("the requested outcome is ${GetOutcome.Outcome.SUCCESS}") {
                val request = GetOutcome.GetOutcomeRequest(outcome = GetOutcome.Outcome.SUCCESS)

                then("it returns a successful response") {
                    val response = subject.getOutcome(request)
                    response shouldBe GetOutcome.GetOutcomeResponse("Success")
                }
            }

            and("the requested outcome is ${GetOutcome.Outcome.NOT_AUTHORIZED}") {
                val request = GetOutcome.GetOutcomeRequest(outcome = GetOutcome.Outcome.NOT_AUTHORIZED)

                then("it returns a NotAuthorizedException exception") {
                    shouldThrowExactly<NotAuthorizedException> { subject.getOutcome(request) }
                }
            }

            and("the requested outcome is ${GetOutcome.Outcome.NOT_FOUND}") {
                val request = GetOutcome.GetOutcomeRequest(outcome = GetOutcome.Outcome.NOT_FOUND)

                then("it returns a ResourceNotFoundException exception") {
                    shouldThrowExactly<ResourceNotFoundException> { subject.getOutcome(request) }
                }
            }

            and("the requested outcome is ${GetOutcome.Outcome.BAD_REQUEST}") {
                val request = GetOutcome.GetOutcomeRequest(outcome = GetOutcome.Outcome.BAD_REQUEST)

                then("it returns a YawaBadRequestException exception") {
                    shouldThrowExactly<YawaBadRequestException> { subject.getOutcome(request) }
                }
            }

            and("the requested outcome is ${GetOutcome.Outcome.INTERNAL_ERROR}") {
                val request = GetOutcome.GetOutcomeRequest(outcome = GetOutcome.Outcome.INTERNAL_ERROR)

                then("it returns a YawaInternalException exception") {
                    shouldThrowExactly<YawaInternalException> { subject.getOutcome(request) }
                }
            }

            and("the requested outcome is ${GetOutcome.Outcome.RANDOM}") {
                val request = GetOutcome.GetOutcomeRequest(outcome = GetOutcome.Outcome.RANDOM)

                and("the random number is <= ${6.0/10}") {
                    every { subject["random"]() } returns 6.0/10

                    then("it returns a successful response") {
                        val response = subject.getOutcome(request)
                        response shouldBe GetOutcome.GetOutcomeResponse("Success")
                    }
                }

                and("the random number is <= ${7.5/10}") {
                    every { subject["random"]() } returns 7.5/10

                    then("it returns a NotAuthorizedException exception") {
                        shouldThrowExactly<NotAuthorizedException> { subject.getOutcome(request) }
                    }
                }

                and("the random number is <= ${9.0/10}") {
                    every { subject["random"]() } returns 9.0/10

                    then("it returns a ResourceNotFoundException exception") {
                        shouldThrowExactly<ResourceNotFoundException> { subject.getOutcome(request) }
                    }
                }

                and("the random number is <= ${9.5/10}") {
                    every { subject["random"]() } returns 9.5/10

                    then("it returns a YawaBadRequestException exception") {
                        shouldThrowExactly<YawaBadRequestException> { subject.getOutcome(request) }
                    }
                }

                and("the random number is > ${9.5/10}") {
                    every { subject["random"]() } returns 9.6/10

                    then("it returns a YawaInternalException exception") {
                        shouldThrowExactly<YawaInternalException> { subject.getOutcome(request) }
                    }
                }
            }
        }
    }
})
