package com.thecat.Client;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class filtrarRecursos {

    public Response getFiltrarRecurso(int userId){

           return given()
                           .contentType("application/json; charset=UTF-8")
                               .when()
                           .get("/posts?userId={userId}", userId)
                               .then()
                                     .extract().response();

    }
}
