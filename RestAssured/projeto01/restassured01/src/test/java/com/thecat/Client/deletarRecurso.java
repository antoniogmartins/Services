package com.thecat.Client;

import com.thecat.Config.RequestConfig;
import io.restassured.response.Response;

public class deletarRecurso {

    public Response deletarRecurso(int id){

        return  RequestConfig.requestSpec()
                               .when()
                           .delete("/posts/{id}", id)
                           .then()
                                     .extract().response();

    }

}
