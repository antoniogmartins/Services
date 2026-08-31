package com.thecat.Tests;

import com.thecat.Client.listarhierarquiaRecursos;
import com.thecat.Config.BaseTest;
import com.thecat.Utils.TestDataReader;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

public class listarhierarquiaRecursosTest extends BaseTest {

    static Stream<Arguments> dadoslistarhierarquiaRecursos() {
        return TestDataReader.lerCSV(
                "testdata/listar_hierarquiarecursos.csv"
        );
    }
    @ParameterizedTest
    @MethodSource("dadoslistarhierarquiaRecursos")
      public void getlistarhierarquiaRecursos(int postId, int StatusEsperado, int quantidadeEsperada){

          listarhierarquiaRecursos listarhierarquiarecursos = new listarhierarquiaRecursos();
          validacoes validator = new validacoes();

          Response resposta = listarhierarquiarecursos.gethierarquiaRecursos(postId);
          assertEquals(StatusEsperado, resposta.statusCode());

       //   Imprmir relatorio = new Imprmir();
       //   relatorio.imprimirRecurso(resposta);

          int quantidade_names = resposta.jsonPath()
                  .getList("names")
                  .size();

          int quantidade_emails = resposta.jsonPath()
                  .getList("email")
                  .size();

          int quantidadepostId = resposta.jsonPath()
                  .getList("findAll { it.postId == " + postId + " }")
                  .size();

          assertTrue(validator.validarNumero(quantidadeEsperada, quantidade_names));
          assertTrue(validator.validarNumero(quantidadeEsperada, quantidade_emails));
          assertTrue(validator.validarNumero(quantidadeEsperada, quantidadepostId));

      }
}
