package com.thecat.Impressao;

import io.restassured.response.Response;

public class Imprmir {

    //Response resposta;

    public void imprimirRecurso(Response resposta){

        System.out.println(resposta.asPrettyString());

    }
}
