package com.yawa.server.events.users.deletion

import com.yawa.server.models.users.User
import org.springframework.context.ApplicationEvent


class UserDeletionRequestedEvent(val user: User): ApplicationEvent(user)
