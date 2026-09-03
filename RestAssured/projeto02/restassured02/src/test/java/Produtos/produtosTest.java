package Produtos;

import Config.baseTest;
import Login.loginTest;
import Utils.geracorpoprodutoDinamico;
import io.restassured.response.Response;
import org.junit.jupiter.api.*;

import static Login.loginTest.obterToken;
import static io.restassured.RestAssured.given;


@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class produtosTest {
   private static String acessToken;
   private static String idusuario;
   private static String email;
   private static String url;
   private static String corpo;

   Response resposta;

    @BeforeAll
    public static void setup() {
        baseTest baseTest = new baseTest();
        url = baseTest.Dados();
        loginTest.setup();
        acessToken = obterToken();
      //  System.out.println("Token de Acesso: " + acessToken);
      //  System.out.println("Corpo do Produto: " + geracorpoprodutoDinamico.gerarProduto());
    }

    @Test
    @Order(1)
    public void testcadastraProdutos() {
        System.out.println("Token de Acesso: " + acessToken);
        System.out.println("Token de Acesso: " + geracorpoprodutoDinamico.gerarProduto());

        resposta =
                given()
                .body(geracorpoprodutoDinamico.gerarProduto())
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
