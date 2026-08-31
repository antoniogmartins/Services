package com.thecat.Tests;

import com.thecat.Client.atualizarRecurso;
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

public class atualizarRecursoTest extends BaseTest {

      static Stream<Arguments> dadosAtualizarRecurso() {
         return TestDataReader.lerCSV(
                "testdata/atualiza_recurso.csv"
         );
      }

      @ParameterizedTest
      @MethodSource("dadosAtualizarRecurso")
      public void atualizarRecurso(int id, int statusEsperado, String titulo, String corpo, int userId){

          atualizarRecurso atualizarecurso = new atualizarRecurso();
          validacoes validator = new validacoes();

          Response resposta = atualizarecurso.atualizaRecurso(id,titulo,corpo,userId);
          assertEquals(statusEsperado, resposta.statusCode());

     //     Imprmir relatorio = new Imprmir();
     //     relatorio.imprimirRecurso(resposta);

          String tituloAtual = resposta.jsonPath()
                  .getString("title");

          String corpoAtual = resposta.jsonPath()
                  .getString("body");

          int userIdAtual = resposta.jsonPath()
                  .getInt("userId");

          int idAtual = resposta.jsonPath()
                  //.getMap("$")
                  //.containsKey("id") ? 1 : 0;
                  .getInt("id");

          assertTrue(validator.validarNumero(userId, userIdAtual));
          assertTrue(validator.validarTexto(titulo, tituloAtual));
          assertTrue(validator.validarTexto(corpo, corpoAtual));
          assertTrue(validator.validarNumero(id, idAtual));



    }
}
