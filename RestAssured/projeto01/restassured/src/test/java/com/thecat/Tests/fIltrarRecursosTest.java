package com.thecat.Tests;

import static org.junit.jupiter.api.Assertions.*;
import com.thecat.Client.filtrarRecursos;
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

public class fIltrarRecursosTest extends BaseTest {

    static Stream<Arguments> dadosfiltrarRecursos() {
        return TestDataReader.lerCSV(
                "testdata/listar_filtrarecursos.csv"
        );
    }
    @ParameterizedTest
    @MethodSource("dadosfiltrarRecursos")
    public void getfiltrarRecursos(int userId, int StatusEsperado, int quantidadeEsperada) {

        filtrarRecursos filtrarecursos = new filtrarRecursos();
        validacoes validator = new validacoes();

        Response resposta = filtrarecursos.getFiltrarRecurso(userId);
        assertEquals(StatusEsperado, resposta.statusCode());

        Imprmir relatorio = new Imprmir();
        relatorio.imprimirRecurso(resposta);

        int quantidade_id = resposta.jsonPath()
                .getList("id")
                .size();

        //System.out.println(quantidadeid);
        int quantidade_userId = resposta.jsonPath()
                .getList("findAll { it.userId == " + userId + " }")
                .size();

        //System.out.println(qtde_userId);
        assertTrue(validator.filtrarecurso_quantidade_id(quantidadeEsperada, quantidade_id));
        assertTrue(validator.filtrarecurso_quantidade_userId(quantidadeEsperada, quantidade_userId));

    }
}
