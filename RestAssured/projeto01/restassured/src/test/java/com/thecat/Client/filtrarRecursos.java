package com.thecat.Client;

import com.thecat.Config.RequestConfig;
import io.restassured.response.Response;


public class filtrarRecursos {

    public Response getFiltrarRecurso(int userId){

        return RequestConfig.requestSpec()
                               .when()
                           .get("/posts?userId={userId}", userId)
                               .then()
                                     .extract().response();

    }
}
