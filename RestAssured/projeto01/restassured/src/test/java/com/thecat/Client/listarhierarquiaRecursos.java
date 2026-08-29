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
                           .get(com.thecat.Config.config.host() + com.thecat.Config.config.host_listar_hierarquia_Recursos())
                               .then()
                                     .extract().response();
           return resposta;
    }
}
