package com.yawa.server.security.encryption

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import java.security.SecureRandom

@Service
class PasswordEncodeService : BCryptPasswordEncoder(
    BCryptVersion.`$2A`,
    10,
    SecureRandom("270690".toByteArray())
)
