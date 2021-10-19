package com.yawa.server.models.users

import org.springframework.security.core.authority.SimpleGrantedAuthority

enum class UserRole {
    ADMIN, NORMAL;

    fun toAuthority(): SimpleGrantedAuthority = SimpleGrantedAuthority("ROLE_$this")
    fun all(): List<UserRole> = listOf(ADMIN, NORMAL)
}
