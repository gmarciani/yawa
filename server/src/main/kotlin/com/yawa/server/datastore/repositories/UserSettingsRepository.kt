package com.yawa.server.repositories;

import com.yawa.server.models.users.UserSettings
import org.springframework.data.repository.CrudRepository
import java.util.*

interface UserSettingsRepository: CrudRepository<UserSettings, UUID>
