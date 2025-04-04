package com.yawa.server.utils

import java.time.Instant
import java.time.LocalDate
import java.time.ZoneOffset

object TimeUtils {

    fun dateToInstant(year: Int, month: Int, day: Int): Instant {
        return LocalDate.of(year, month, day)
            .atStartOfDay(ZoneOffset.UTC)
            .toInstant()
    }
}
