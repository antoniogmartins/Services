package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class listarhierarquiaRecursos {

    Response resposta;
    public Response gethierarquiaRecursos(int postId){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get("/posts/{postId}/comments", postId)
                               .then()
                                     .extract().response();
           return resposta;
    }
}
