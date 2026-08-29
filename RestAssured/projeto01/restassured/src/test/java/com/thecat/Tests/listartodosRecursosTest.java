package com.thecat.Tests;

import com.thecat.Client.listartodosRecursos;
import com.thecat.Relatorios.ImprmirRecursos;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class listarRecursosTest {

      @Test
      public void getlistarRecursos(){

          listartodosRecursos listartodosrecursos = new listartodosRecursos();
          validacoes validator = new validacoes();

          Response resposta = listartodosrecursos.GetRecurso();
          assertEquals(200, resposta.statusCode());

          ImprmirRecursos relatorio = new ImprmirRecursos();
          relatorio.imprimirRecurso(resposta);

          List<String> titles = resposta.jsonPath()
                  .getList("title");

          Integer quantidade = titles.size();
          assertTrue(validator.listarecurso_quantidade_id(quantidade));

    }
}
