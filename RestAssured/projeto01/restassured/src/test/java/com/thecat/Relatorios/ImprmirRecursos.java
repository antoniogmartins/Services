package com.thecat.Relatorios;

import io.restassured.response.Response;

public class ImprmirRecursos {

    //Response resposta;

    public void imprimirRecurso(Response resposta){

        System.out.println(resposta.asPrettyString());

    }
}
