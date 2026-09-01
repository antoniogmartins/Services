package com.thecat.Client;

import com.thecat.Config.RequestConfig;
import io.restassured.response.Response;


public class listartodosRecursos {

    public Response getRecurso(){
        return  RequestConfig.requestSpec()
                               .when()
                           .get("/posts")
                               .then()
                                     .extract().response();

    }
}
