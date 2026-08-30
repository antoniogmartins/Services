package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class listartodosRecursos {

    Response resposta;
    public Response getRecurso(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get("/posts")
                               .then()
                                     .extract().response();
           return resposta;
    }
}
