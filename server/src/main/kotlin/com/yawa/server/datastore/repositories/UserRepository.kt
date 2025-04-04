package com.yawa.server.datastore.repositories

import com.yawa.server.models.users.User
import org.springframework.data.repository.CrudRepository
import java.util.Optional
import java.util.UUID

interface UserRepository : CrudRepository<User, UUID> {

    fun findByEmail(email: String): Optional<User>

    fun existsByEmail(email: String): Boolean
}
