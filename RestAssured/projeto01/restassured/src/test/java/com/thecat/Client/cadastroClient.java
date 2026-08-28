package com.thecat.Client;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class cadastroClient {

    Response resposta;
    public Response GetCadastro(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get(com.thecat.Config.config.host() + com.thecat.Config.config.hostCadastro())
                               .then()
                                     .extract().response();
           return resposta;
    }

    public void imprimirCadClient(){

        System.out.println(resposta.asPrettyString());

    }
}
