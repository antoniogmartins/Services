package com.thecat.Config;

import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class RequestConfig  {

    public static RequestSpecification requestSpec() {

        return given()
                .contentType("application/json");
    }
}
