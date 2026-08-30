package com.thecat.Client;

import com.thecat.Config.config;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class listartodosRecursos {

    Response resposta;
    public Response GetRecurso(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get(config.host() + config.host_listartodosRecursos())
                               .then()
                                     .extract().response();
           return resposta;
    }
}
