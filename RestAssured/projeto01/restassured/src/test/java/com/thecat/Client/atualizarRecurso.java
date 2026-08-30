package com.thecat.Client;

import io.restassured.response.Response;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.*;

public class atualizarRecurso {

    Response resposta;

    public Response atualizaRecurso(int id,String titulo,String corpo,int userId) {

        Map<String, Object> body = new HashMap<>();

        body.put("title", titulo);
        body.put("body", corpo);
        body.put("userId", userId);

           resposta =
                   given()
                           .contentType("application/json; charset=UTF-8")
                           .body(body)
                               .when()
                           .put("/posts/{id}", id)
                           .then()
                                     .extract().response();
           return resposta;
    }

}
