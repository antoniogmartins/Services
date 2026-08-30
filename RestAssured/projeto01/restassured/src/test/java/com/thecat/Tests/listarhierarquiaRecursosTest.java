package com.thecat.Tests;

import com.thecat.Client.listarhierarquiaRecursos;
import com.thecat.Config.BaseTest;
import com.thecat.Validator.validacoes;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class listarhierarquiaRecursosTest extends BaseTest {

      @Test
      public void getlistarhierarquiaRecursos(){

          listarhierarquiaRecursos listarhierarquiarecursos = new listarhierarquiaRecursos();
          validacoes validator = new validacoes();

          Response resposta = listarhierarquiarecursos.GethierarquiaRecursos();
          assertEquals(200, resposta.statusCode());

       //   Imprmir relatorio = new Imprmir();
       //   relatorio.imprimirRecurso(resposta);

          Integer qtde_names = resposta.jsonPath()
                  .getList("names")
                  .size();

        //  System.out.println(qtde_names);
          assertTrue(validator.listarhierarquiarecurso_names(qtde_names));

          Integer qtde_emails = resposta.jsonPath()
                  .getList("email")
                  .size();

        //  System.out.println(qtde_emails);
          assertTrue(validator.listarhierarquiarecurso_email(qtde_emails));

          Integer qtde_postId = resposta.jsonPath()
                  .getList("findAll { it.postId == 1 }")
                  .size();
          //System.out.println(qtde_userId);
          assertTrue(validator.listarhierarquiarecurso_postId(qtde_postId));

      }
}
