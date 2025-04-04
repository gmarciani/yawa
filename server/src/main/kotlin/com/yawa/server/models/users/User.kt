package com.yawa.server.models.users

import com.yawa.server.validators.Email
import com.yawa.server.validators.EncryptedPassword
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import org.hibernate.annotations.UuidGenerator
import java.time.Instant
import java.util.UUID

@Entity
@Table(name = "users")
class User(

    @Email
    @Column(name = "email", unique = true)
    var email: String,

    @EncryptedPassword
    @Column(name = "password")
    var password: String,

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    var role: UserRole = UserRole.NORMAL,

    @Enumerated(EnumType.STRING)
    @Column(name = "subscription_plan")
    var subscriptionPlan: UserSubscriptionPlan = UserSubscriptionPlan.FREE,

    @Column(name = "is_enabled")
    var isEnabled: Boolean = true,

    @Column(name = "is_account_not_expired")
    var isAccountNonExpired: Boolean = true,

    @Column(name = "is_account_not_locked")
    var isAccountNonLocked: Boolean = true,

    @Column(name = "is_credentials_not_expired")
    var isCredentialsNonExpired: Boolean = true,

    @Column(name = "created_at")
    var createdAt: Instant,

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false)
    val id: UUID? = null,

    @OneToOne(
        mappedBy = "user",
        cascade = [CascadeType.ALL],
        orphanRemoval = true,
        fetch = FetchType.LAZY,
        optional = true,
    )
    var profile: UserProfile? = null,

    @OneToOne(
        mappedBy = "user",
        cascade = [CascadeType.ALL],
        orphanRemoval = true,
        fetch = FetchType.LAZY,
        optional = true,
    )
    var settings: UserSettings? = null,
) {

    fun userPrincipal(): UserPrincipal = UserPrincipal(
        id!!, email, password, role.toAuthorities(),
        isEnabled, isAccountNonExpired, isCredentialsNonExpired, isAccountNonLocked,
    )
}
