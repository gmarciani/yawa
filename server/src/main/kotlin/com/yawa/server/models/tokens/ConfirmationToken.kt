package com.yawa.server.models.tokens

import com.yawa.server.models.users.User
import java.time.Duration
import java.time.Instant
import java.util.*
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.OneToOne

val VALIDITY: Duration = Duration.ofDays(1)

@Entity
class ConfirmationToken(
    @OneToOne(targetEntity = User::class, fetch = FetchType.EAGER)
    @JoinColumn(name = "username", nullable = false)
    val user: User,
    val expiryDate: Instant = Instant.now().plusMillis(VALIDITY.toMillis()),
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    var id: UUID? = null
)
