package com.yawa.server.api.users;

import com.yawa.server.exceptions.DuplicatedResourceException;
import com.yawa.server.exceptions.ResourceNotFoundException;
import com.yawa.server.models.users.User;
import com.yawa.server.models.users.UserRoles;
import com.yawa.server.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="/api/users")
@Slf4j
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public User signup(@Valid @RequestBody SignupUserRequest request) {
        log.info("Called Users.signup: {}", request);

        if (userRepository.existsById(request.getUsername())) {
            throw new DuplicatedResourceException(String.format("User already exists: %s", request.getUsername()));
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setAuthoritiesForRole(UserRoles.NORMAL);
        userRepository.save(user);
        return user;
    }

    @GetMapping
    public List<User> getAll() {
        log.info("Called Users.getAll");
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @PostMapping
    public User create(@Valid @RequestBody CreateUserRequest request) {
        log.info("Called Users.create: {}", request);

        if (userRepository.existsById(request.getUsername())) {
            throw new DuplicatedResourceException(String.format("User already exists: %s", request.getUsername()));
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setAuthoritiesForRole(request.getRole());
        userRepository.save(user);
        return user;
    }

    @PatchMapping("/{username}")
    public User update(@PathVariable String username, @Valid @RequestBody UpdateUserRequest request) {
        log.info("Called Users.update: {} {}", username, request);
        User user = userRepository.findById(username)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("User not found: %s", username)));
        user.setPassword(request.getPassword());
        return userRepository.save(user);
    }

    @GetMapping("/{username}")
    public User describe(@PathVariable String username) {
        log.info("Called Users.describe: {}", username);
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
