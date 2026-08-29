package com.thecat.Tests;

import com.thecat.Client.atualizarRecurso;
import com.thecat.Impressao.ImprmirRecursos;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class atualizarRecursoTest {

      @Test
      public void atualizarRecurso(){

          atualizarRecurso atualizarecurso = new atualizarRecurso();
          validacoes validator = new validacoes();

          Response resposta = atualizarecurso.atualizaRecurso();
          assertEquals(200, resposta.statusCode());

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

//          System.out.println("titulo: "+titulo);
//          System.out.println("corpo: "+corpo);
//          System.out.println("userid: "+userId);
//          System.out.println("quant: "+quant_Id);

          assertEquals(userId, validator.atualizarecurso_userid(userId));
          assertEquals(titulo, validator.atualizarrecurso_Titulo(titulo));
          assertEquals(corpo, validator.atualizarecurso_Corpo(corpo));
          assertTrue(validator.atualizarecurso_id(quant_Id));



    }
}
