package br.com.martins.framework.builders;

import br.com.martins.framework.models.auth.LoginRequest;

public final class LoginBuilder {

private LoginBuilder() {
}

public static LoginRequest usuarioValido() {

    return LoginRequest.builder()

            .username("emilys")

            .password("emilyspass")

            .expiresInMins(30)

            .build();
}
}
