package com.yawa.server.models.users

import com.yawa.server.validators.Email
import com.yawa.server.validators.EncryptedPassword
import com.yawa.server.validators.Username
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.Id

@Entity
open class User(
    @Id @Username val username: String,
    @Email var email: String,
    @EncryptedPassword var password: String,
    @ElementCollection(fetch = FetchType.EAGER) var authorities: MutableSet<GrantedAuthority> = mutableSetOf(UserRole.NORMAL.toAuthority()),
    var isEnabled: Boolean = true,
    var isAccountNonExpired: Boolean = true,
    var isCredentialsNonExpired: Boolean = true,
    var isAccountNonLocked: Boolean = true
) {

    fun setAuthoritiesForRole(role: UserRole) { authorities = mutableSetOf(role.toAuthority()) }

    fun toUserDetails() : UserDetails = org.springframework.security.core.userdetails.User(
        username, password, isEnabled, isAccountNonExpired, isCredentialsNonExpired, isAccountNonLocked, authorities)
}
