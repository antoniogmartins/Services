package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class listarhierarquiaRecursos {

    Response resposta;
    public Response GethierarquiaRecursos(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get("posts/1/comments")
                               .then()
                                     .extract().response();
           return resposta;
    }
}
