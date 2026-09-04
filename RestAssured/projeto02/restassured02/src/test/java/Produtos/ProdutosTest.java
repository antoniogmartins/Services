package Produtos;

import static Config.BaseTest.*;

import Data.GerarprodutosDinamico;
import io.restassured.response.Response;
import org.junit.jupiter.api.*;
import static Login.LoginTest.*;
import static io.restassured.RestAssured.given;
import Utils.CriarprodutosDinamico;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ProdutosTest {
   private static String acessToken;
   private static String idusuario;
   private static String email;
   private static String url;
   private static CriarprodutosDinamico corpo;

   Response resposta;

    @BeforeAll
    public static void setup() {
        url = Dados();
        acessToken = obterToken();
        corpo = GerarprodutosDinamico.gerarProduto();
    }

    @Test
    @Order(1)
    public void testcadastraProdutos() {
        System.out.println("Dados: " + url);
        System.out.println("Token de Acesso: " + acessToken);
        System.out.println("Corpo do Produto: " + corpo.getNome());
        System.out.println("Preço do Produto: " + corpo.getPreco());
        System.out.println("Descrição do Produto: " + corpo.getDescricao());
        System.out.println("Quantidade do Produto: " + corpo.getQuantidade());

        resposta =
                given()
                .body(corpo)
                   .contentType("application/json")
                   .header("Authorization", acessToken)
                .when()
                .post(url + "/produtos")
                .then()
      //          .log().all()
                   .statusCode(201)
                .extract()
                .response()
                   ;

        // idusuario = resposta.jsonPath().getString("_id");
        // System.out.println("ID do usuário: " + idusuario);



    }



}
