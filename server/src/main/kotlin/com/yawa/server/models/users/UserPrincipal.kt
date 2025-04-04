package com.yawa.server.models.users

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import java.util.UUID

data class UserPrincipal(
    val id: UUID,
    val email: String,
    private val password: String,
    private val authorities: Collection<GrantedAuthority>,
    private val isAccountNonExpired: Boolean = true,
    private val isCredentialsNonExpired: Boolean = true,
    private val isAccountNonLocked: Boolean = true,
    private val isEnabled: Boolean = true,
) : UserDetails {

    override fun getUsername() = email

    override fun getAuthorities() = authorities

    override fun getPassword() = password

    override fun isAccountNonExpired() = isAccountNonExpired

    override fun isAccountNonLocked() = isCredentialsNonExpired

    override fun isCredentialsNonExpired() = isAccountNonLocked

    override fun isEnabled() = isEnabled
}
