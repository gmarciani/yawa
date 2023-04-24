package com.yawa.server.components.security

import com.yawa.server.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserInfoService(
    @Autowired val userRepository: UserRepository
) : UserDetailsService {
    override fun loadUserByUsername(username: String?): UserDetails {
        return userRepository
            .findById(username!!)
            .orElseThrow { UsernameNotFoundException("User not found: $username") }
            .toUserDetails()
    }
}