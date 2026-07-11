package br.com.martins.framework.models.auth;

import lombok.*;

@Getter @Setter @Builder @NoArgsConstructor @AllArgsConstructor
public class RefreshResponse {

    private String accessToken;
    private String refreshToken;
    private String tokenType;
    private Long expiresIn;
}