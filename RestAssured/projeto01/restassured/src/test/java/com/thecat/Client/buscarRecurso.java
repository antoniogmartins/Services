package com.thecat.Client;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class buscarRecurso{

    Response resposta;

    public Response getRecurso(int id){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get("/posts/{id}", id)
                               .then()
                                     .extract().response();
           return resposta;
    }

}
