package Produtos;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class updateProduto {

    @Test
    public static void updateProduto() {

            String json = "{\n" +
                    "    \"title\": \"iPhone Galaxy +1\"\n" +
                    "}";

            //   @Test
            Response resposta = given()
                    .baseUri("https://dummyjson.com")
                    .header("Content-Type", "application/json")
                    .body(json)
                    .when()
                    .put("/products/1")
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
