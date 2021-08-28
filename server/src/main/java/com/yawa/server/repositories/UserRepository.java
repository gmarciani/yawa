package com.yawa.server.repositories;

import com.yawa.server.models.users.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
}
