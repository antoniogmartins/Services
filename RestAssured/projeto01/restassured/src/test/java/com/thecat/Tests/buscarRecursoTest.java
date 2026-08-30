package com.thecat.Tests;
import com.thecat.Client.buscarRecurso;
import com.thecat.Config.BaseTest;
import com.thecat.Impressao.Imprmir;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.params.ParameterizedTest;
import com.thecat.Utils.TestDataReader;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.Arguments;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;

public class buscarRecursoTest extends BaseTest {

    static Stream<Arguments> dadosBuscarRecurso() {
        return TestDataReader.lerCSV(
                "testdata/buscar_recurso.csv"
        );
    }

    @ParameterizedTest
    @MethodSource("dadosBuscarRecurso")
    public void getbuscarRecurso(int id, int statusEsperado, String tituloEsperado, String corpoEsperado){

          buscarRecurso buscarRecurso = new buscarRecurso();
          validacoes validator = new validacoes();

          Response resposta = buscarRecurso.getRecurso(id);
          assertEquals(statusEsperado, resposta.statusCode());

          Imprmir relatorio = new Imprmir();
          relatorio.imprimirRecurso(resposta);

          Integer idResposta = resposta.jsonPath()
                  .getInt("id");

          String titulo = resposta.jsonPath()
                  .getString("title");

          String corpo = resposta.jsonPath()
                  .getString("body");

          System.out.println(resposta.asString());

          Integer quant_userId = resposta.jsonPath()
                  .getMap("$")
                  .containsKey("userId") ? 1 : 0;

          System.out.println(quant_userId);

          assertTrue(validator.validarId(id, idResposta));
          assertTrue(validator.validarTitulo(tituloEsperado, titulo));
          assertTrue(validator.validarCorpo(corpoEsperado,corpo));
          assertTrue(validator.buscarecurso_qtd_userId(quant_userId));

    }
}
