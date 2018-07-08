package com.antilamer.WebSocketProject.model;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
public class UserDTO {

    private Integer id;

    private String username;

    private String password;

    private Collection<? extends GrantedAuthority> authorities;


    public UserDTO() {
    }

    public UserDTO(UserDetails userDetails) {
        this.username = userDetails.getUsername();
        this.authorities = userDetails.getAuthorities();
    }

}
