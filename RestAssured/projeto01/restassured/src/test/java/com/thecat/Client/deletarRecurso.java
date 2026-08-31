package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class deletarRecurso {

    public Response deletarRecurso(int id){

           return given()
                           .contentType("application/json; charset=UTF-8")
                               .when()
                           .delete("/posts/{id}", id)
                           .then()
                                     .extract().response();

    }

}
