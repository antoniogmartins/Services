package com.thecat.Tests;

import com.thecat.Client.atualizarRecurso;
import com.thecat.Config.BaseTest;
import com.thecat.DTO.Response.RecursoResponseDTO;
import com.thecat.DTO.Request.AtualizarRecursoDTO;
import com.thecat.Utils.TestDataReader;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import java.util.stream.Stream;
import static org.junit.jupiter.api.Assertions.*;

public class atualizarRecursoTest extends BaseTest {

      static Stream<Arguments> dadosAtualizarRecurso() {
         return TestDataReader.lerCSV(
                "testdata/atualiza_recurso.csv"
         ).map(arguments -> {

             Object[] valores = arguments.get();

             int id = (Integer) valores[0];
             int statusEsperado = (Integer) valores[1];

             String titulo = (String) valores[2];
             String corpo = (String) valores[3];
             int userId = (Integer) valores[4];

             AtualizarRecursoDTO request =
                     new AtualizarRecursoDTO(
                             titulo,
                             corpo,
                             userId
                     );

             return Arguments.of(
                     id,
                     statusEsperado,
                     request
             );
         });
      }

      @ParameterizedTest
      @MethodSource("dadosAtualizarRecurso")

      public void atualizarRecurso(int id, int statusEsperado, AtualizarRecursoDTO request) {

          atualizarRecurso atualizarecurso = new atualizarRecurso();
          validacoes validator = new validacoes();

          Response resposta = atualizarecurso.atualizaRecurso(id, request);
          assertEquals(statusEsperado, resposta.statusCode());
          RecursoResponseDTO recurso =
                   resposta.as(RecursoResponseDTO.class);

          //     Imprmir relatorio = new Imprmir();
          //     relatorio.imprimirRecurso(resposta);

          assertTrue(validator.validarNumero(request.getUserId(), recurso.getUserId()));
          assertTrue(validator.validarTexto(request.getTitle(), recurso.getTitle()));
          assertTrue(validator.validarTexto(request.getBody(), recurso.getBody()));
          assertTrue(validator.validarNumero(id, recurso.getId()));


      }
}
