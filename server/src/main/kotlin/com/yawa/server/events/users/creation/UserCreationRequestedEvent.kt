package com.yawa.server.events.users.creation

import com.yawa.server.models.users.User
import org.springframework.context.ApplicationEvent


class UserCreationRequestedEvent(val user: User): ApplicationEvent(user)
