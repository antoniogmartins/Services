package com.thecat.Tests;

import com.thecat.Client.deletarRecurso;
import com.thecat.Config.BaseTest;
import com.thecat.Impressao.Imprmir;
import com.thecat.Utils.TestDataReader;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class deletarRecursoTest extends BaseTest {

     static Stream<Arguments> dadosDeletarRecurso() {
        return TestDataReader.lerCSV(
                "testdata/deletar_recurso.csv"
        );
      }

      @ParameterizedTest
      @MethodSource("dadosDeletarRecurso")
      public void deletarRecurso(int id, int StatusEsperado, String ResultadoEsperado){

          deletarRecurso deletarecurso = new deletarRecurso();
          validacoes validator = new validacoes();

          Response resposta = deletarecurso.deletarRecurso(id);
          assertEquals(StatusEsperado, resposta.statusCode());

      //    Imprmir relatorio = new Imprmir();
      //    relatorio.imprimirRecurso(resposta);


          assertTrue(validator.validarTexto(resposta.asString().trim(), ResultadoEsperado));

    }
}
