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

    //      Imprmir relatorio = new Imprmir();
    //      relatorio.imprimirRecurso(resposta);


          String tituloAtual = resposta.jsonPath()
                  .getString("title");

          String corpoAtual = resposta.jsonPath()
                  .getString("body");

          int IdAtual = resposta.jsonPath()
                  .getInt("id");

          assertTrue(validator.validarNumero(id,IdAtual));
          assertTrue(validator.validarTexto(tituloEsperado, tituloAtual));
          assertTrue(validator.validarTexto(corpoEsperado,corpoAtual));

    }
}
