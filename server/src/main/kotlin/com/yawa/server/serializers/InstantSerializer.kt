package com.yawa.server.serializers

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.databind.JsonSerializer
import com.fasterxml.jackson.databind.SerializerProvider
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter

class InstantSerializer : JsonSerializer<Instant>() {
    companion object {
        private val DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").withZone(ZoneId.systemDefault())
    }

    override fun serialize(value: Instant?, gen: JsonGenerator?, serializers: SerializerProvider?) {
        gen?.writeString(DATE_TIME_FORMATTER.format(value))
    }

    override fun handledType(): Class<Instant> {
        return Instant::class.java
    }
}
