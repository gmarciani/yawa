package com.yawa.server.events.users.deletion

import com.yawa.server.models.users.User
import org.springframework.context.ApplicationEvent


class UserDeletionConfirmedEvent(val user: User): ApplicationEvent(user)
