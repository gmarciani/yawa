package com.yawa.server.security.throttling

import io.github.bucket4j.distributed.ExpirationAfterWriteStrategy
import io.github.bucket4j.redis.lettuce.cas.LettuceBasedProxyManager
import io.lettuce.core.RedisClient
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.time.Duration


@Configuration
class BucketsCacheConfig {

    companion object {
        val EXPIRATION_STRATEGY: ExpirationAfterWriteStrategy =
            ExpirationAfterWriteStrategy.fixedTimeToLive(Duration.ofHours(1))
    }

    @Bean
    fun bucketsCacheProxyManager(redisClient: RedisClient): LettuceBasedProxyManager {
        return LettuceBasedProxyManager.builderFor(redisClient)
            .withExpirationStrategy(EXPIRATION_STRATEGY)
            .build()
    }

}
