package com.thecat.Client;

import com.thecat.Config.config;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class listarhierarquiaRecursos {

    Response resposta;
    public Response GethierarquiaRecursos(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get(config.host() + config.host_listar_hierarquia_Recursos())
                               .then()
                                     .extract().response();
           return resposta;
    }
}
