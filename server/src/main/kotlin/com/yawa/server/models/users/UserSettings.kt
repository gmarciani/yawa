package com.yawa.server.models.users

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "user_settings")
class UserSettings(
    @OneToOne(
        mappedBy = "user",
        cascade = [CascadeType.ALL],
        orphanRemoval = true,
        fetch = FetchType.LAZY,
        optional = true,
    )
    @Column(name = "payment_method")
    var paymentMethod: PaymentMethod? = null,

    @Column(name = "is_mfa_enabled")
    var isMfaEnabled: Boolean = false,

    @Id
    @Column(name = "user_id", updatable = false)
    val userId: UUID? = null,

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    @JsonBackReference
    val user: User,
)
