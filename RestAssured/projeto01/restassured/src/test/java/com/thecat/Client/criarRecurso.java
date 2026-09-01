package com.thecat.Client;

import com.thecat.Config.RequestConfig;
import io.restassured.response.Response;
import com.thecat.DTO.Request.CriarRecursoDTO;


public class criarRecurso {

    public Response getcriaRecurso(CriarRecursoDTO request) {

        return RequestConfig.requestSpec()
                           .body(request)
                               .when()
                           .post("/posts")
                           .then()
                                     .extract().response();

    }

}
