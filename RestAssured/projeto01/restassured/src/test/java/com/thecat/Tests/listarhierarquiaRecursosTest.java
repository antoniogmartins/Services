package com.thecat.Tests;

import com.thecat.Client.listarhierarquiaRecursos;
import com.thecat.Config.BaseTest;
import com.thecat.DTO.Response.ComentarioResponseDTO;
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

public class listarhierarquiaRecursosTest extends BaseTest {

    static Stream<Arguments> dadoslistarhierarquiaRecursos() {
        return TestDataReader.lerCSV(
                "testdata/listar_hierarquiarecursos.csv"
        );
    }
    @ParameterizedTest
    @MethodSource("dadoslistarhierarquiaRecursos")
      public void getlistarhierarquiaRecursos(int postId, int StatusEsperado){

          listarhierarquiaRecursos listarhierarquiarecursos = new listarhierarquiaRecursos();
          validacoes validator = new validacoes();

          Response resposta = listarhierarquiarecursos.gethierarquiaRecursos(postId);
          assertEquals(StatusEsperado, resposta.statusCode());

          List<ComentarioResponseDTO> comentarios =
                resposta.jsonPath()
                        .getList(
                                "",
                                ComentarioResponseDTO.class
                        );



      }
}
