package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class listartodosRecursos {


    public Response getRecurso(){

           return given()
                           .contentType("application/json; charset=UTF-8")
                               .when()
                           .get("/posts")
                               .then()
                                     .extract().response();

    }
}
