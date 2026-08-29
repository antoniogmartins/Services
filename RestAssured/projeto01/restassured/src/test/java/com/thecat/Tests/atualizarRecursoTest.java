package com.thecat.Tests;

import com.thecat.Client.criarRecurso;
import com.thecat.Relatorios.ImprmirRecursos;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class criarRecursoTest {

      @Test
      public void getcriarRecurso(){

          criarRecurso criarrecurso = new criarRecurso();
          validacoes validator = new validacoes();

          Response resposta = criarrecurso.GetRecurso();
          assertEquals(201, resposta.statusCode());

          ImprmirRecursos relatorio = new ImprmirRecursos();
          relatorio.imprimirRecurso(resposta);

          String titulo = resposta.jsonPath()
                  .getString("title");

          String corpo = resposta.jsonPath()
                  .getString("body");

          String userId = resposta.jsonPath()
                  .getString("userId");

          int quant_Id = resposta.jsonPath()
                  .getMap("$")
                  .containsKey("id") ? 1 : 0;

        //  System.out.println(titulo);
        //  System.out.println(quant_Id);

          assertEquals(userId, validator.criarecurso_userid(userId));
          assertEquals(titulo, validator.criarecurso_Titulo(titulo));
          assertEquals(corpo, validator.criarecurso_Corpo(corpo));
          assertTrue(validator.criarecurso_id(quant_Id));

    }
}
