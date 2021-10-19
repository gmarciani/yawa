package com.yawa.server.repositories;

import com.yawa.server.models.users.User;
import org.springframework.data.repository.CrudRepository;

interface UserRepository: CrudRepository<User, String>
