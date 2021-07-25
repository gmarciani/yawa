package com.yawa.controllers;

import com.yawa.exceptions.DuplicatedResourceException;
import com.yawa.exceptions.ResourceNotFoundException;
import com.yawa.models.User;
import com.yawa.models.dto.UserDto;
import com.yawa.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="/users")
@Slf4j
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAll() {
        log.info("Called Users.getAll");
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @PostMapping
    public User create(@RequestBody User user) {
        log.info("Called Users.create: {}", user);
        if (userRepository.existsById(user.getUsername())) {
            throw new DuplicatedResourceException(String.format("User already exists: %s", user.getUsername()));
        }
        userRepository.save(user);
        return user;
    }

    @PatchMapping("/{username}")
    public User update(@PathVariable String username, @RequestBody UserDto userDto) {
        log.info("Called Users.update: {} {}", username, userDto);
        User user = userRepository.findById(username)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("User not found: %s", username)));
        user.setPassword(userDto.getPassword());
        return userRepository.save(user);
    }

    @GetMapping("/{username}")
    public User get(@PathVariable String username) {
        log.info("Called Users.get: {}", username);
        return userRepository.findById(username)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("User not found: %s", username)));
    }

    @DeleteMapping("/{username}")
    public User delete(@PathVariable String username) {
        log.info("Called Users.delete: {}", username);
        User user = userRepository.findById(username)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("User not found: %s", username)));
        userRepository.delete(user);
        return user;
    }
}
