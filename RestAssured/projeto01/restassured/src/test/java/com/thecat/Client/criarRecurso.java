package com.thecat.Client;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class criarRecurso {

    private final String _body = "{\n" +
            "    \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",\n" +
            "    \"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\",\n" +
            "    \"userId\": 1\n" +
            "}";

    Response resposta;

    public Response GetcriaRecurso(){

           resposta =
                   given()
                           .contentType("application/json; charset=UTF-8")
                           .body(_body)
                               .when()
                           .post(com.thecat.Config.config.host() + com.thecat.Config.config.host_criar_Recurso())
                           .then()
                                     .extract().response();
           return resposta;
    }

}
