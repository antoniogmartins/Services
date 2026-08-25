
package br.com.martins.framework.services.auth;

import br.com.martins.framework.constantes.Endpoints;
import br.com.martins.framework.models.auth.LoginRequest;
import br.com.martins.framework.models.auth.LoginResponse;
import br.com.martins.framework.models.auth.RefreshRequest;
import br.com.martins.framework.models.auth.RefreshResponse;
import io.restassured.response.Response;
import br.com.martins.framework.services.common.*;


public class AuthService extends BaseService {

    /**
     * Responsável por autenticar usuário e gerar tokens
     */
    public LoginResponse login(LoginRequest request) {

        Response response =
                post(Endpoints.LOGIN, request);

        return response.as(LoginResponse.class);
    }

    /**
     * Responsável por renovar access token
     */
    public RefreshResponse refreshToken(RefreshRequest request) {

        Response response =
                post(Endpoints.REFRESH, request);

        return response.as(RefreshResponse.class);
    }
}