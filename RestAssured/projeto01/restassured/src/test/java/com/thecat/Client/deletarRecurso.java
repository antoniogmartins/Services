package com.thecat.Client;

import com.thecat.Config.RequestConfig;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class deletarRecurso {

    public Response deletarRecurso(int id){

        return  RequestConfig.requestSpec()
                               .when()
                           .delete("/posts/{id}", id)
                           .then()
                                     .extract().response();

    }

}
