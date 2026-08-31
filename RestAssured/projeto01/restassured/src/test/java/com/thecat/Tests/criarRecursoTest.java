package com.thecat.Tests;
import com.thecat.DTO.Response.RecursoResponseDTO;
import com.thecat.DTO.Request.CriarRecursoDTO;
import com.thecat.Client.criarRecurso;
import com.thecat.Config.BaseTest;
import com.thecat.Utils.TestDataReader;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

public class criarRecursoTest extends BaseTest {

      static Stream<Arguments> dadosCriarRecurso() {
        return TestDataReader.lerCSV(
                "testdata/criar_recurso.csv"
         ).map(arguments -> {

            Object[] valores = arguments.get();

            int id = (Integer) valores[0];
            int statusEsperado = (Integer) valores[1];

            String titulo = (String) valores[2];
            String corpo = (String) valores[3];
            int userId = (Integer) valores[4];

            CriarRecursoDTO request =
                    new CriarRecursoDTO(
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
      @MethodSource("dadosCriarRecurso")
      public void getcriarRecurso(int id, int statusEsperado, CriarRecursoDTO request){

          criarRecurso criarrecurso = new criarRecurso();
          validacoes validator = new validacoes();

          Response resposta = criarrecurso.getcriaRecurso(request);
          assertEquals(statusEsperado, resposta.statusCode());
          RecursoResponseDTO recurso =
                  resposta.as(RecursoResponseDTO.class);

      //    Imprmir relatorio = new Imprmir();
      //    relatorio.imprimirRecurso(resposta);


          assertTrue(validator.validarNumero(request.getUserId(), recurso.getUserId()));
          assertTrue(validator.validarTexto(request.getTitle(), recurso.getTitle()));
          assertTrue(validator.validarTexto(request.getBody(), recurso.getBody()));
          assertTrue(validator.validarNumero(recurso.getId(), id));

    }
}
