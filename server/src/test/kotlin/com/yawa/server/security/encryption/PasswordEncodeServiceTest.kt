package com.yawa.server.security.encryption

import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldBe

class PasswordEncodeServiceTest : BehaviorSpec({
    given(PasswordEncodeService::class.simpleName!!) {
        val encoder = PasswordEncodeService()
        val clearText = "password"
        `when`("encode is called for clear text $clearText") {
            val encodedText = encoder.encode(clearText)
            then("it should return and encoded text matching the clear text") {
                encoder.matches(clearText, encodedText) shouldBe true
            }
        }
    }
})
