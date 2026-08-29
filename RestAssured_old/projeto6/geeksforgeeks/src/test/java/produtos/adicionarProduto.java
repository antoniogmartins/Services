package produtos;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class adicionarProduto {

    @Test
    public static void adicionarProduto() {

            String json = "{\n" +
                    "    \"title\": \"BMW Pencil\"\n" +
                    "}";

            Response resposta = given()
                    .baseUri("https://dummyjson.com")
                    .header("Content-Type", "application/json")
                    .body(json)
                    .when()
                    .post("/products/add")
                    .then()
                    .statusCode(201)
                    .extract()
                    .response();

            System.out.println("Body: " + resposta.getBody().prettyPrint());
            String id = resposta.jsonPath().getString("id");
            String title = resposta.jsonPath().getString("title");
            System.out.println("Id: " + id);
            System.out.println("Title: " + title);

    }
}
