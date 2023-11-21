package com.yawa.server.cache

import io.lettuce.core.RedisClient
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class RedisCacheConfig(
    @Value("\${yawa.cache.username}") final val username: String,
    @Value("\${yawa.cache.password}") final val password: String,
    @Value("\${yawa.cache.host}") final val host: String,
    @Value("\${yawa.cache.port}") final val port: Int,
) {

    @Bean
    fun redisClient(): RedisClient {
        return RedisClient.create("redis://$username:$password@$host:$port")
    }

}
