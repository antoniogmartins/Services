package com.thecat.Client;

import com.thecat.Config.RequestConfig;
import io.restassured.response.Response;

public class listarhierarquiaRecursos {


    public Response gethierarquiaRecursos(int postId){

        return  RequestConfig.requestSpec()
                               .when()
                           .get("/posts/{postId}/comments", postId)
                               .then()
                                     .extract().response();

    }
}
