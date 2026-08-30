package com.thecat.Tests;

import com.thecat.Client.criarRecurso;
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

import static org.junit.jupiter.api.Assertions.*;

public class criarRecursoTest extends BaseTest {

      static Stream<Arguments> dadosCriarRecurso() {
        return TestDataReader.lerCSV(
                "testdata/criar_recurso.csv"
         );
      }

      @ParameterizedTest
      @MethodSource("dadosCriarRecurso")
      public void getcriarRecurso(int id, int statusEsperado, String titulo, String corpo, int userId){

          criarRecurso criarrecurso = new criarRecurso();
          validacoes validator = new validacoes();

          Response resposta = criarrecurso.getcriaRecurso(titulo, corpo, userId);
          assertEquals(statusEsperado, resposta.statusCode());

          Imprmir relatorio = new Imprmir();
          relatorio.imprimirRecurso(resposta);

          String tituloAtual = resposta.jsonPath()
                  .getString("title");

          String corpoAtual = resposta.jsonPath()
                  .getString("body");

          int userIdAtual = resposta.jsonPath()
                  .getInt("userId");

          int idAtual = resposta.jsonPath()
               //   .getMap("$")
               //   .containsKey("id") ? 1 : 0;
                       .getInt("id");

        //  System.out.println(titulo);
        //  System.out.println(quant_Id);

          assertTrue(validator.criarecurso_userid(userId, userIdAtual));
          assertTrue(validator.criarecurso_Titulo(titulo, tituloAtual));
          assertTrue(validator.criarecurso_Corpo(corpo, corpoAtual));
          assertTrue(validator.criarecurso_Id(id, idAtual));

    }
}
