package com.thecat.Tests;

import com.thecat.Client.deletarRecurso;
import com.thecat.Config.BaseTest;
import com.thecat.Impressao.Imprmir;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class deletarRecursoTest extends BaseTest {

      @Test
      public void deletarRecurso(){

          deletarRecurso deletarecurso = new deletarRecurso();
          validacoes validator = new validacoes();

          Response resposta = deletarecurso.deletarRecurso();
          assertEquals(200, resposta.statusCode());

          Imprmir relatorio = new Imprmir();
          relatorio.imprimirRecurso(resposta);

          Boolean quant_Id = resposta.jsonPath()
                  .getMap("$")
                  .isEmpty();

          assertTrue(validator.deletarecurso_id(quant_Id));

    }
}
