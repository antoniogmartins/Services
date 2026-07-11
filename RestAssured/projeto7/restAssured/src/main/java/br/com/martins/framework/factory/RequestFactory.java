package br.com.martins.framework.factory;

import br.com.martins.framework.config.Config;
import br.com.martins.framework.constantes.Headers;
import br.com.martins.framework.utils.TokenManager;
import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;

public final class RequestFactory {

    private RequestFactory() {
    }

    /**
     * Request sem autenticação
     */
    public static RequestSpecification request() {

        return RestAssured
                .given()
                .baseUri(Config.BASE_URL)
                .header(
                        Headers.CONTENT_TYPE,
                        Headers.APPLICATION_JSON
                )
                .header(
                        Headers.ACCEPT,
                        Headers.APPLICATION_JSON
                );

    }

    /**
     * Request autenticada
     */
    public static RequestSpecification authenticatedRequest() {

        return request()
                .header(
                        Headers.AUTHORIZATION,
                        "Bearer " + TokenManager.getAccessToken()
                );

    }

}