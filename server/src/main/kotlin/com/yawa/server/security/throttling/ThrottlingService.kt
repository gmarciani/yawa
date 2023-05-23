package com.yawa.server.security.throttling

import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserSubscriptionPlan
import io.github.bucket4j.Bucket
import io.github.bucket4j.BucketConfiguration
import io.github.bucket4j.redis.lettuce.cas.LettuceBasedProxyManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class ThrottlingService(
    @Autowired val bucketsCacheProxyManager: LettuceBasedProxyManager
) {

    fun resolveBucket(user: User): Bucket {
        return bucketsCacheProxyManager.builder().build(user.username.toByteArray(), newBucket(user.subscriptionPlan))
    }

    fun deleteIfExists(username: String) {
        bucketsCacheProxyManager.removeProxy(username.toByteArray())
    }

    private fun newBucket(userSubscriptionPlan: UserSubscriptionPlan): BucketConfiguration {
        return BucketConfiguration.builder().addLimit(userSubscriptionPlan.limit()).build()
    }
}
