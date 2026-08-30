package com.thecat.Client;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class filtrarRecursos {

    Response resposta;

    public Response getFiltrarRecurso(int userId){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get("/posts?userId={userId}", userId)
                               .then()
                                     .extract().response();
           return resposta;
    }
}
