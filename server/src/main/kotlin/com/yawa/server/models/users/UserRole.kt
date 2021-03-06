package com.yawa.server.models.users

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority

enum class UserRole {
    ADMIN, NORMAL;

    fun toAuthorities(): MutableSet<GrantedAuthority> = mutableSetOf(SimpleGrantedAuthority("ROLE_$this"))
}
