package com.thecat.Client;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class filtrarRecursos {

    Response resposta;

    public Response GetFiltrarRecurso(){

           resposta =
                   given()
                           .contentType("application/json")
                               .when()
                           .get("posts?userId=1")
                               .then()
                                     .extract().response();
           return resposta;
    }
}
