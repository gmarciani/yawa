package com.yawa.server.models.users;

import com.yawa.server.validators.Email;
import com.yawa.server.validators.Password;
import com.yawa.server.validators.RegularString;
import com.yawa.server.validators.Username;
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

    @Email
    private String email;

    @Password
    private String password;

    @RegularString
    private String firstname;

    @RegularString
    private String lastname;

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
