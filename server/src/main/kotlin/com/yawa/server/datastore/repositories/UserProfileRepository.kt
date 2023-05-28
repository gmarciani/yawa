package com.yawa.server.repositories;

import com.yawa.server.models.users.UserProfile
import org.springframework.data.repository.CrudRepository
import java.util.*

interface UserProfileRepository: CrudRepository<UserProfile, UUID>
