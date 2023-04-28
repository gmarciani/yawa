package com.yawa.server.components.throttling

import com.yawa.server.models.users.UserPlan
import io.github.bucket4j.Bucket
import org.springframework.stereotype.Service
import java.util.concurrent.ConcurrentHashMap

@Service
class ThrottlingService {

    private val bucketCache: ConcurrentHashMap<String, Bucket> = ConcurrentHashMap()

    fun resolveBucket(username: String): Bucket {
        return bucketCache.getOrDefault(username, newBucket())
    }

    fun deleteIfExists(username: String) {
        bucketCache.remove(username)
    }

    private fun newBucket(): Bucket {
        return Bucket.builder()
            .addLimit(UserPlan.FREE.limit())
            .build()
    }
}
