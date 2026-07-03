package Produtos;

import io.restassured.response.Response;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;

public class buscarProdutos {

    @Test
    public static void buscarProdutos() {

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .when()
                .get("/products")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.prettyPeek());

    }
}
