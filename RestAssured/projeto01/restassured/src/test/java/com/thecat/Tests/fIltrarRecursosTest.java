package com.thecat.Tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.thecat.Client.filtrarRecursos;
import com.thecat.Client.listartodosRecursos;
import com.thecat.Relatorios.ImprmirRecursos;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import java.util.List;

public class fIltrarRecursosTest {

    @Test
    public void getfiltrarRecursos() {

        filtrarRecursos filtrarecursos = new filtrarRecursos();
        validacoes validator = new validacoes();

        Response resposta = filtrarecursos.GetFiltrarRecurso();
        assertEquals(200, resposta.statusCode());

        ImprmirRecursos relatorio = new ImprmirRecursos();
        relatorio.imprimirRecurso(resposta);

        List<Integer> id = resposta.jsonPath()
                .getList("id");

        Integer quantidadeid = id.size();
        System.out.println(quantidadeid);
        assertTrue(validator.filtrarecurso_quantidade_id(quantidadeid));

    }
}
