package com.thecat.Client;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class buscarRecurso{

    Response resposta;
    public Response getRecurso(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get("/posts/1")
                               .then()
                                     .extract().response();
           return resposta;
    }

}
