package com.thecat.Tests;

import com.thecat.Client.listartodosRecursos;
import com.thecat.Config.BaseTest;
import com.thecat.Impressao.Imprmir;
import com.thecat.Utils.TestDataReader;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

public class listartodosRecursosTest extends BaseTest {


    static Stream<Arguments> dadosbuscartodosRecursos() {
        return TestDataReader.lerCSV(
                "testdata/listar_todosrecursos.csv"
        );
    }
      @ParameterizedTest
      @MethodSource("dadosbuscartodosRecursos")
      public void getlistartodosRecursos(int statusEsperado){

          listartodosRecursos listartodosrecursos = new listartodosRecursos();
          validacoes validator = new validacoes();

          Response resposta = listartodosrecursos.getRecurso();
          assertEquals(statusEsperado, resposta.statusCode());

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
