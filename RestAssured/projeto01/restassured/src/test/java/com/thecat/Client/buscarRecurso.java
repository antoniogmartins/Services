package com.thecat.Client;

import com.thecat.Config.RequestConfig;
import io.restassured.response.Response;

public class buscarRecurso{

    public Response getRecurso(int id){

        return RequestConfig.requestSpec()
                               .when()
                           .get("/posts/{id}", id)
                               .then()
                                     .extract().response();

    }

}
