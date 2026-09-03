package Login;

import Config.baseTest;
import io.restassured.response.Response;
import org.junit.jupiter.api.*;
import static Utils.geracorpousuarioEstatico.*;
import static io.restassured.RestAssured.given;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class loginTest {

   private static String url;
   public static String acessToken;
   private static String corpo;


    static Response resposta;

    @BeforeAll
    public static void setup() {
        baseTest baseTest = new baseTest();
        url = baseTest.Dados();
        corpo = gerarMassadeDadosUsuarioEstatico();
    }

  //  @Test
    @Order(1)
    public static String obterToken() {

        resposta = given()
                .body(corpo)
                .contentType("application/json")
                .when()
                  .post(url + "/login")
                .then()
                   .statusCode(200)
                   .extract()
                .response();

         acessToken = resposta.jsonPath().getString("authorization");
         System.out.println("AcessToken: " + acessToken);
         return acessToken;
    }


}
