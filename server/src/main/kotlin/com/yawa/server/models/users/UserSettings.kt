package com.yawa.server.models.users

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.MapsId
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.util.UUID

@Entity
@Table(name = "user_settings")
class UserSettings(
    @Column(name = "is_mfa_enabled")
    var isMfaEnabled: Boolean = false,

    @Id
    @Column(name = "user_id", updatable = false)
    val userId: UUID? = null,

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    val user: User,
)
