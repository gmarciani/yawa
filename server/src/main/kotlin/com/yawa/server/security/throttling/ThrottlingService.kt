package com.yawa.server.security.throttling

import com.yawa.server.models.users.User
import com.yawa.server.models.users.UserSubscriptionPlan
import io.github.bucket4j.Bucket
import io.github.bucket4j.BucketConfiguration
import io.github.bucket4j.distributed.proxy.ProxyManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.UUID


@Service
class ThrottlingService(
    @Autowired val bucketsCacheProxyManager: ProxyManager<ByteArray>,
) {

    fun resolveBucket(user: User): Bucket {
        return bucketsCacheProxyManager.builder().build(
            user.id.toString().toByteArray(), newBucket(user.subscriptionPlan),
        )
    }

    fun deleteIfExists(userId: UUID) {
        bucketsCacheProxyManager.removeProxy(userId.toString().toByteArray())
    }

    private fun newBucket(userSubscriptionPlan: UserSubscriptionPlan): BucketConfiguration {
        return BucketConfiguration.builder().addLimit(userSubscriptionPlan.limit()).build()
    }
}
