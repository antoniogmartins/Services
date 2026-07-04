package Carts;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class buscarCartporUser {

    @Test
    public static void buscarCartporUser() {

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .when()
                .get("/carts/user/5")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.getBody().prettyPrint());

    }
}
