package com.yawa.server.repositories;

import com.yawa.server.models.tokens.ConfirmationToken
import com.yawa.server.models.users.User
import org.springframework.data.repository.CrudRepository
import java.util.*

interface ConfirmationTokenRepository: CrudRepository<ConfirmationToken, Long> {
    fun findByIdAndUser(id: Long, user: User): Optional<ConfirmationToken>
}
