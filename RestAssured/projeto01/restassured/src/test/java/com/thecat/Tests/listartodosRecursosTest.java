package com.thecat.Tests;

import com.thecat.Client.listartodosRecursos;
import com.thecat.Config.BaseTest;
import com.thecat.Impressao.Imprmir;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class listartodosRecursosTest extends BaseTest {

      @Test
      public void getlistartodosRecursos(){

          listartodosRecursos listartodosrecursos = new listartodosRecursos();
          validacoes validator = new validacoes();

          Response resposta = listartodosrecursos.GetRecurso();
          assertEquals(200, resposta.statusCode());

          Imprmir relatorio = new Imprmir();
          relatorio.imprimirRecurso(resposta);

          Integer quantidade_titulos = resposta.jsonPath()
                  .getList("title")
                  .size();

          assertTrue(validator.listarecurso_quantidade_id(quantidade_titulos));

          Integer qtde_userId = resposta.jsonPath()
                  .getList("findAll { it.userId == 1 }")
                  .size();
          //System.out.println(qtde_userId);
          assertTrue(validator.listartodosrecurso_qtd_userId(qtde_userId));






    }
}
