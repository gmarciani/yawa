package com.yawa.server.components.cache

import io.lettuce.core.RedisClient
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class RedisCacheConfig {

    companion object {
        const val REDIS_USER = "admin"
        const val REDIS_PASSWORD = "adminpass"
        const val REDIS_HOST = "cache"
        const val REDIS_PORT = 6379
    }

    @Bean
    fun redisClient(): RedisClient {
        return RedisClient.create("redis://$REDIS_USER:$REDIS_PASSWORD@$REDIS_HOST:$REDIS_PORT");
    }

}
