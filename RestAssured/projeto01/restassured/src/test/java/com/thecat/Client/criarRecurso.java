package com.thecat.Client;

import io.restassured.response.Response;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class criarRecurso {

    Response resposta;

    public Response getcriaRecurso(String titulo, String corpo,int userId) {

            Map<String, Object> body = new HashMap<>();
            body.put("title", titulo);
            body.put("body", corpo);
            body.put("userId", userId);

            resposta =
                   given()
                           .contentType("application/json; charset=UTF-8")
                           .body(body)
                               .when()
                           .post("/posts")
                           .then()
                                     .extract().response();
           return resposta;
    }

}
