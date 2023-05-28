package com.yawa.server.models.users

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority

enum class UserRole {
    ADMIN, PROMETHEUS, NORMAL, ANONYMOUS;

    fun toAuthorities(): MutableSet<GrantedAuthority> = mutableSetOf(SimpleGrantedAuthority(this.roleName()))

    private fun roleName(): String = "ROLE_$this"
}
