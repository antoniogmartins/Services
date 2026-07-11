package br.com.martins.framework.models.auth;

import lombok.*;

@Getter @Setter @Builder @NoArgsConstructor @AllArgsConstructor
public class LoginResponse {

    private String accessToken;

    private String refreshToken;

    private Integer id;

    private String username;

    private String email;

}