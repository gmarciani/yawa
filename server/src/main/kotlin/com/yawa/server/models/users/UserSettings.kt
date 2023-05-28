package com.yawa.server.models.users

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import org.hibernate.annotations.UuidGenerator
import java.util.*

@Entity
@Table(name = "user_settings")
class UserSettings(
    @Column(name = "is_mfa_enabled")
    var isMfaEnabled: Boolean = false,

    @OneToOne(mappedBy = "settings", cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    @JsonBackReference
    var user: User? = null,

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false)
    val id: UUID? = null
)
