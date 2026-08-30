package com.thecat.Tests;

import static org.junit.jupiter.api.Assertions.*;
import com.thecat.Client.filtrarRecursos;
import com.thecat.Config.BaseTest;
import com.thecat.Impressao.Imprmir;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

public class fIltrarRecursosTest extends BaseTest {

    @Test
    public void getfiltrarRecursos() {

        filtrarRecursos filtrarecursos = new filtrarRecursos();
        validacoes validator = new validacoes();

        Response resposta = filtrarecursos.GetFiltrarRecurso();
        assertEquals(200, resposta.statusCode());

        Imprmir relatorio = new Imprmir();
        relatorio.imprimirRecurso(resposta);

        Integer quantidadeid = resposta.jsonPath()
                .getList("id")
                .size();

        System.out.println(quantidadeid);
        assertTrue(validator.filtrarecurso_quantidade_id(quantidadeid));

        Integer qtde_userId = resposta.jsonPath()
                .getList("findAll { it.userId != 1 }")
                .size();

        System.out.println(qtde_userId);
        assertTrue(validator.filtrarecurso_quantidade_userId(qtde_userId));

    }
}
