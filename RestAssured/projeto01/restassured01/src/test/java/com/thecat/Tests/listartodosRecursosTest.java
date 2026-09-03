package com.thecat.Tests;

import com.thecat.Client.listartodosRecursos;
import com.thecat.Config.BaseTest;
import com.thecat.DTO.Response.RecursoResponseDTO;
import com.thecat.Utils.TestDataReader;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.List;
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
      public void getlistartodosRecursos(int statusEsperado,int quantidadetitulosEsperada, int quantidadeuseridEsperada){

          listartodosRecursos listartodosrecursos = new listartodosRecursos();

          Response resposta = listartodosrecursos.getRecurso();
          assertEquals(statusEsperado, resposta.statusCode());

  //        Imprmir relatorio = new Imprmir();
  //        relatorio.imprimirRecurso(resposta);

          List<RecursoResponseDTO> recursos =
                  resposta.jsonPath()
                          .getList(
                                  "",
                                  RecursoResponseDTO.class
                          );

          long quantidadeUserId =
                  recursos.stream()
                          .filter(recurso ->
                                  recurso.getUserId() == 1
                          )
                          .count();


          assertEquals(quantidadetitulosEsperada,recursos.size());
          assertEquals(quantidadeuseridEsperada, quantidadeUserId);

    }
}
