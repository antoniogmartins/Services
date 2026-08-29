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
                           .delete(com.thecat.Config.config.host() + com.thecat.Config.config.host_criar_Recurso()
                                   + com.thecat.Config.config.host_atualizar_deletar_Recurso())
                           .then()
                                     .extract().response();
           return resposta;
    }

}
