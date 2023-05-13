package com.yawa.server.repositories;

import com.yawa.server.models.tokens.ConfirmationToken
import com.yawa.server.models.users.User
import org.springframework.data.repository.CrudRepository
import java.util.*

interface ConfirmationTokenRepository: CrudRepository<ConfirmationToken, UUID> {
    fun findByIdAndUser(id: UUID, user: User): Optional<ConfirmationToken>
}
