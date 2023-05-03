package com.yawa.server.api.open

import com.yawa.server.exceptions.NotAuthorizedException
import com.yawa.server.exceptions.ResourceNotFoundException
import com.yawa.server.exceptions.YawaDatabaseInternalException
import com.yawa.server.exceptions.YawaInternalException
import io.kotest.assertions.throwables.shouldThrowExactly
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe
import io.mockk.spyk

class GetDeterministicOutcomeTest : BehaviorSpec({
    given(GetDeterministicOutcome::class.simpleName!!) {
        val subject = spyk<GetDeterministicOutcome>(recordPrivateCalls = true)

        `when`("GetDeterministicOutcome is called") {

            and("the requested outcome is ${GetDeterministicOutcome.Outcome.SUCCESS}") {
                val request = GetDeterministicOutcome.GetDeterministicOutcomeRequest(outcome = GetDeterministicOutcome.Outcome.SUCCESS)

                then("it returns a successful response") {
                    val response = subject.getDeterministicOutcome(request)
                    response shouldBe GetDeterministicOutcome.GetDeterministicOutcomeResponse("Success")
                }
            }

            and("the requested outcome is ${GetDeterministicOutcome.Outcome.NOT_AUTHORIZED}") {
                val request = GetDeterministicOutcome.GetDeterministicOutcomeRequest(outcome = GetDeterministicOutcome.Outcome.NOT_AUTHORIZED)

                then("it returns a NotAuthorizedException exception") {
                    shouldThrowExactly<NotAuthorizedException> { subject.getDeterministicOutcome(request) }
                }
            }

            and("the requested outcome is ${GetDeterministicOutcome.Outcome.NOT_FOUND}") {
                val request = GetDeterministicOutcome.GetDeterministicOutcomeRequest(outcome = GetDeterministicOutcome.Outcome.NOT_FOUND)

                then("it returns a ResourceNotFoundException exception") {
                    shouldThrowExactly<ResourceNotFoundException> { subject.getDeterministicOutcome(request) }
                }
            }

            and("the requested outcome is ${GetDeterministicOutcome.Outcome.DB_ERROR}") {
                val request = GetDeterministicOutcome.GetDeterministicOutcomeRequest(outcome = GetDeterministicOutcome.Outcome.DB_ERROR)

                then("it returns a YawaDatabaseInternalException exception") {
                    shouldThrowExactly<YawaDatabaseInternalException> { subject.getDeterministicOutcome(request) }
                }
            }

            and("the requested outcome is ${GetDeterministicOutcome.Outcome.INTERNAL_ERROR}") {
                val request = GetDeterministicOutcome.GetDeterministicOutcomeRequest(outcome = GetDeterministicOutcome.Outcome.INTERNAL_ERROR)

                then("it returns a YawaInternalException exception") {
                    shouldThrowExactly<YawaInternalException> { subject.getDeterministicOutcome(request) }
                }
            }
        }
    }
})
