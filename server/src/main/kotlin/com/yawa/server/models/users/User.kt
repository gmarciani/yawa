package com.yawa.server.models.users

import com.yawa.server.validators.Email
import com.yawa.server.validators.EncryptedPassword
import com.yawa.server.validators.Username
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.Id
import org.springframework.security.core.userdetails.UserDetails

@Entity
class User(
    @Id @Username val username: String,
    @Email var email: String,
    @EncryptedPassword var password: String,
    @Enumerated(EnumType.STRING) var role: UserRole = UserRole.NORMAL,
    @Enumerated(EnumType.STRING) var subscriptionPlan: UserSubscriptionPlan = UserSubscriptionPlan.FREE,
    var isEnabled: Boolean = true,
    var isAccountNonExpired: Boolean = true,
    var isCredentialsNonExpired: Boolean = true,
    var isAccountNonLocked: Boolean = true
) {

    fun toUserDetails(): UserDetails = org.springframework.security.core.userdetails.User(
        username, password,
        isEnabled, isAccountNonExpired, isCredentialsNonExpired, isAccountNonLocked,
        role.toAuthorities())
}
