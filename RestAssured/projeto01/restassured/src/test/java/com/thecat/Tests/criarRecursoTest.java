package com.thecat.Tests;
import com.thecat.Client.buscarRecurso;
import com.thecat.Relatorios.ImprmirRecursos;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class buscarRecursoTest {

      @Test
      public void getbuscarRecurso(){

          buscarRecurso buscarRecurso = new buscarRecurso();
          validacoes validator = new validacoes();

          Response resposta = buscarRecurso.GetRecurso();
          assertEquals(200, resposta.statusCode());

          ImprmirRecursos relatorio = new ImprmirRecursos();
          relatorio.imprimirRecurso(resposta);

          Integer id = resposta.jsonPath()
                  .getInt("id");

          String titulo = resposta.jsonPath()
                  .getString("title");

          String corpo = resposta.jsonPath()
                  .getString("body");

          Integer quant_userId = resposta.jsonPath()
                  .getList("userId")
                  .size();

        //  System.out.println(quant_userId);

          assertEquals(id, validator.buscarecurso_id(id));
          assertEquals(titulo, validator.buscarecurso_Titulo(titulo));
          assertEquals(corpo, validator.buscarecurso_Corpo(corpo));
          assertTrue(validator.buscarecurso_qtd_userId(quant_userId));

    }
}
