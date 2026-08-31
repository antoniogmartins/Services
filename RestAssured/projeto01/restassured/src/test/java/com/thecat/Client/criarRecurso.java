package com.thecat.Client;

import io.restassured.response.Response;
import com.thecat.DTO.Request.CriarRecursoDTO;
import static io.restassured.RestAssured.given;

public class criarRecurso {

    public Response getcriaRecurso(CriarRecursoDTO request) {

            return given()
                           .contentType("application/json; charset=UTF-8")
                           .body(request)
                               .when()
                           .post("/posts")
                           .then()
                                     .extract().response();

    }

}
