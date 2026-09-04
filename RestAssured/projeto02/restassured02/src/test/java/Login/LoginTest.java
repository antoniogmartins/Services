package Login;

import static Config.BaseTest.*;
import static Data.GerarcorpousuarioEstatico.*;
import io.restassured.response.Response;
import org.junit.jupiter.api.*;
import static io.restassured.RestAssured.given;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class LoginTest {

    private static String url;
    public static String acessToken;
    private static String corpo;

    static Response resposta;

  //  @Test
    @Order(1)
    public static String obterToken() {
        url = Dados();
        corpo = gerarcorpousuarioEstatico();

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
