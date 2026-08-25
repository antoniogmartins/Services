package br.com.martins.framework.models.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @Builder @NoArgsConstructor @AllArgsConstructor
public class LoginRequest {

    private String username;

    private String password;

    private Integer expiresInMins;

}