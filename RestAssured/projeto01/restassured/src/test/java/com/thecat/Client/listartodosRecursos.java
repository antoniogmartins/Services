package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class listartodosRecursos {

    Response resposta;
    public Response GetRecurso(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get(com.thecat.Config.config.host() + com.thecat.Config.config.host_listartodosRecursos())
                               .then()
                                     .extract().response();
           return resposta;
    }
}
