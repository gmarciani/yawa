package com.yawa.server.security.authentication

import com.yawa.server.datastore.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserInfoService(
    @Autowired val userRepository: UserRepository,
) : UserDetailsService {
    override fun loadUserByUsername(username: String?): UserDetails {
        /*
        This is intentional because YAWA uses email based authentication,
        but Spring Security requires a username to be passed to the loadUserByUsername method.
        This is a workaround to allow YAWA to use email based authentication.
        */
        return userRepository
            .findByEmail(username!!)
            .orElseThrow { UsernameNotFoundException("User not found: $username") }
            .userPrincipal()
    }
}
