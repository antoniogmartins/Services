package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class listarhierarquiaRecursos {


    public Response gethierarquiaRecursos(int postId){

           return given()
                           .contentType("application/json; charset=UTF-8")
                               .when()
                           .get("/posts/{postId}/comments", postId)
                               .then()
                                     .extract().response();

    }
}
