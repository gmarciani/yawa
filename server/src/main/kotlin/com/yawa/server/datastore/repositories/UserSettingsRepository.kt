package com.yawa.server.datastore.repositories

import com.yawa.server.models.users.UserSettings
import org.springframework.data.repository.CrudRepository
import java.util.UUID

interface UserSettingsRepository : CrudRepository<UserSettings, UUID>
