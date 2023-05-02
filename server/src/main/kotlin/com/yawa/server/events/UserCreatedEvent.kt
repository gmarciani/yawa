package com.yawa.server.events

import com.yawa.server.models.users.User
import org.springframework.context.ApplicationEvent


class UserCreatedEvent(val user: User): ApplicationEvent(user)
