package auth;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class buscarusuariocorrente {

    @Test
    public void buscarUsuarioCorrente(){

        gerarToken auth = new gerarToken();

        String token = auth.login_usuarioesenha_validos();

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + token)
                .body("{}")
                .when()
                .get("/auth/me")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Body: " + resposta.getBody().prettyPrint());

    }
}
