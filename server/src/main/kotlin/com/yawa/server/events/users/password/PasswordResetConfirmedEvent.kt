package com.yawa.server.events.users.password

import com.yawa.server.models.users.User
import org.springframework.context.ApplicationEvent

class PasswordResetConfirmedEvent(val user: User): ApplicationEvent(user)
