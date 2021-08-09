package com.yawa.models;

import com.yawa.validators.Password;
import com.yawa.validators.Username;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class User implements UserDetails {

    @Id
    @Username
    private String username;

    @Password
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<GrantedAuthority> authorities = new HashSet<>();
    private boolean accountNonExpired = true;
    private boolean accountNonLocked = true;
    private boolean credentialsNonExpired = true;
    private boolean enabled = true;

    public void setAuthoritiesForRole(String role) {
        this.authorities.add(new SimpleGrantedAuthority(String.format("ROLE_%s", role)));
    }
}
