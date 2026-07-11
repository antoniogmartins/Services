package br.com.martins.framework.utils;

import br.com.martins.framework.builders.LoginBuilder;
import br.com.martins.framework.models.auth.LoginResponse;
import br.com.martins.framework.services.auth.AuthService;

public final class TokenManager {

    private static String accessToken;

    private static String refreshToken;

    private TokenManager() {
    }

    public static String getAccessToken() {

        if (accessToken == null) {

            authenticate();

        }

        return accessToken;

    }

    private static void authenticate() {

        AuthService authService = new AuthService();

        LoginResponse response =
                authService.login(
                        LoginBuilder.usuarioValido()
                );

        accessToken = response.getAccessToken();

        refreshToken = response.getRefreshToken();

    }

    public static String getRefreshToken() {

        return refreshToken;

    }

    public static void clear() {

        accessToken = null;

        refreshToken = null;

    }

}


