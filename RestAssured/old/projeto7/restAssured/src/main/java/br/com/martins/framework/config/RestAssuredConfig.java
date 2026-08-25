package br.com.martins.framework.config;

import io.restassured.RestAssured;

public final class RestAssuredConfig {

    private RestAssuredConfig() {
    }

    public static void setup() {

        RestAssured.baseURI = Config.BASE_URL;

    }

}