package com.yawa.server.datastore.repositories

import com.yawa.server.models.users.User
import org.springframework.data.repository.CrudRepository
import java.util.Optional
import java.util.UUID

interface UserRepository : CrudRepository<User, UUID> {
    fun findByUsername(username: String): Optional<User>

    fun findByEmail(email: String): Optional<User>

    fun existsByUsername(username: String): Boolean

    fun existsByEmail(email: String): Boolean
}
