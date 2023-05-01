package com.yawa.server.components.throttling

import com.yawa.server.models.users.UserPlan
import io.github.bucket4j.Bucket
import io.github.bucket4j.BucketConfiguration
import io.github.bucket4j.redis.lettuce.cas.LettuceBasedProxyManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class ThrottlingService(
    @Autowired val bucketsCacheProxyManager: LettuceBasedProxyManager
) {

    fun resolveBucket(username: String): Bucket {
        return bucketsCacheProxyManager.builder().build(username.toByteArray(), newBucket())
    }

    fun deleteIfExists(username: String) {
        bucketsCacheProxyManager.removeProxy(username.toByteArray())
    }

    private fun newBucket(): BucketConfiguration {
        return BucketConfiguration.builder().addLimit(UserPlan.FREE.limit()).build()
    }
}
