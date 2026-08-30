package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class deletarRecurso {

    Response resposta;

    public Response deletarRecurso(){

           resposta =
                   given()
                           .contentType("application/json; charset=UTF-8")
                               .when()
                           .delete("/posts/1")
                           .then()
                                     .extract().response();
           return resposta;
    }

}
