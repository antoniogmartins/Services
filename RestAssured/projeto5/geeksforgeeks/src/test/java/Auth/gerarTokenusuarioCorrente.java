package Auth;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class gerarTokenusuarioCorrente {

    @Test
    public void GerarTokenUsuario(){

        logarGerarToken auth = new logarGerarToken();

        String token = auth.loginUserToken();

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

        System.out.println("Body: " + resposta.getBody().prettyPeek());

        String TokenPrimario = resposta.jsonPath().getString("accessToken");
        String TokenSecundario = resposta.jsonPath().getString("refreshToken");

        System.out.println("Acesstoken(Atualizado): " + TokenPrimario);
        System.out.println("RefreshToken(Atualizado): " + TokenSecundario);

    }
}
