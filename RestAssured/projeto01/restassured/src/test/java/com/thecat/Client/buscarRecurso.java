package com.thecat.Client;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class buscarRecurso{

    public Response getRecurso(int id){

           return given()
                           .contentType("application/json; charset=UTF-8")
                               .when()
                           .get("/posts/{id}", id)
                               .then()
                                     .extract().response();

    }

}
