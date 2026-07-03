package Produtos;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class deletarProduto {

    @Test
    public static void deletarProduto() {

            //   @Test
            Response resposta = given()
                    .baseUri("https://dummyjson.com")
                    .header("Content-Type", "application/json")
                    .body("{}")
                    .when()
                    .delete("/products/1")
                    .then()
                    .statusCode(200)
                    .extract()
                    .response();

            System.out.println("Body: " + resposta.getBody().asPrettyString());
            String id = resposta.jsonPath().getString("id");
            String title = resposta.jsonPath().getString("title");
            System.out.println("Id: " + id);
            System.out.println("Title: " + title);

    }
}
