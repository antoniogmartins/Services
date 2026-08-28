package com.thecat.Relatorios;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class ImprmirRecursos {

    //Response resposta;

    public void imprimirRecurso(Response resposta){

        System.out.println(resposta.asPrettyString());

    }
}
