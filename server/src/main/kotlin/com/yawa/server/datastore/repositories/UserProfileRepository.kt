package com.yawa.server.datastore.repositories

import com.yawa.server.models.users.UserProfile
import org.springframework.data.repository.CrudRepository
import java.util.UUID

interface UserProfileRepository : CrudRepository<UserProfile, UUID>
