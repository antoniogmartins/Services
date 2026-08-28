package com.thecat.Tests;
import com.thecat.Client.cadastroClient;
import com.thecat.Validator.cadastroValidator;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class cadastroTest {

      @Test
      public void getCadastro(){

          cadastroClient cadcliente = new cadastroClient();
          cadastroValidator validator = new cadastroValidator();

          Response resposta = cadcliente.GetCadastro();
          assertEquals(200, resposta.statusCode());

          cadcliente.imprimirCadClient();

          String titulo = resposta.jsonPath()
                  .getString("title");

          String corpo = resposta.jsonPath()
                  .getString("body");

          Integer id = resposta.jsonPath()
                          .getInt("id");

          assertEquals(id, validator.id(id));
          assertEquals(titulo, validator.Titulo(titulo));
          assertEquals(corpo, validator.Corpo(corpo));

    }
}
