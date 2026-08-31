package com.thecat.Client;

import com.thecat.DTO.Request.AtualizarRecursoDTO;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class atualizarRecurso {

    public Response atualizaRecurso(int id, AtualizarRecursoDTO request) {

           return given()
                           .contentType("application/json; charset=UTF-8")
                           .body(request)
                               .when()
                           .put("/posts/{id}", id)
                           .then()
                                     .extract().response();

    }

}
