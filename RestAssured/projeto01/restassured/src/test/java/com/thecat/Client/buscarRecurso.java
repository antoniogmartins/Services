package com.thecat.Client;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class buscarRecurso {

    Response resposta;
    public Response GetRecurso(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get(com.thecat.Config.config.host() + com.thecat.Config.config.hostbuscarRecurso())
                               .then()
                                     .extract().response();
           return resposta;
    }

}
