package com.thecat.Client;

import com.thecat.Config.RequestConfig;
import com.thecat.DTO.Request.AtualizarRecursoDTO;
import io.restassured.response.Response;


public class atualizarRecurso {

    public Response atualizaRecurso(int id, AtualizarRecursoDTO request) {

        return RequestConfig.requestSpec()
                           .body(request)
                               .when()
                           .put("/posts/{id}", id)
                           .then()
                                     .extract().response();

    }

}
