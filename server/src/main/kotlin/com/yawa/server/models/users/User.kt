package com.yawa.server.models.users

import com.fasterxml.jackson.annotation.JsonManagedReference
import com.yawa.server.validators.Email
import com.yawa.server.validators.EncryptedPassword
import com.yawa.server.validators.Username
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import org.hibernate.annotations.UuidGenerator
import org.springframework.security.core.userdetails.UserDetails
import java.util.*

@Entity
@Table(name = "users")
class User(
    @Username
    @Column(name = "username", unique = true)
    val username: String,

    @EncryptedPassword
    @Column(name = "password")
    var password: String,

    @Email
    @Column(name = "email", unique = true)
    var email: String,

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

    @JoinColumn(name = "profile_id", referencedColumnName = "id")
    @OneToOne(cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    @JsonManagedReference
    var profile: UserProfile = UserProfile(),

    @JoinColumn(name = "settings_id", referencedColumnName = "id")
    @OneToOne(cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    @JsonManagedReference
    var settings: UserSettings = UserSettings(),

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false)
    val id: UUID? = null
) {

    fun toUserDetails(): UserDetails = org.springframework.security.core.userdetails.User(
        username, password,
        isEnabled, isAccountNonExpired, isCredentialsNonExpired, isAccountNonLocked,
        role.toAuthorities())
}
