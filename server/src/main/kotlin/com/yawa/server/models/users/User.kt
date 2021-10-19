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
    @Id @Username private val username: String,
    @Email private var email: String,
    @EncryptedPassword private var password: String,
    @ElementCollection(fetch = FetchType.EAGER) private var authorities: MutableSet<GrantedAuthority> = mutableSetOf(UserRole.NORMAL.toAuthority()),
    private var isAccountNonExpired: Boolean = true,
    private var isAccountNonLocked: Boolean = true,
    private var isCredentialsNonExpired: Boolean = true,
    private var isEnabled: Boolean = true
) : UserDetails {

    override fun getUsername(): String = username

    override fun getPassword(): String = password
    fun setPassword(value: String) { password = value }

    fun getEmail(): String = email
    fun setEmail(value: String) { email = value }

    override fun getAuthorities(): Set<GrantedAuthority> = authorities
    fun setAuthoritiesForRole(role: UserRole) { authorities = mutableSetOf(role.toAuthority()) }

    override fun isAccountNonExpired(): Boolean = isAccountNonExpired
    fun setIsAccountNonExpired(value: Boolean) { isAccountNonExpired = value }

    override fun isAccountNonLocked(): Boolean = isAccountNonLocked
    fun setIsAccountNonLocked(value: Boolean) { isAccountNonLocked = value }

    override fun isCredentialsNonExpired(): Boolean = isCredentialsNonExpired
    fun setIsCredentialsNonExpired(value: Boolean) { isCredentialsNonExpired = value }

    override fun isEnabled(): Boolean = isEnabled
    fun setIsEnabled(value: Boolean) { isEnabled = value }
}
