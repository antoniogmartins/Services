package br.com.martins.framework.models.auth;

import lombok.*;

@Getter @Setter @Builder @NoArgsConstructor @AllArgsConstructor
public class RefreshRequest {

    private String refreshToken;
}