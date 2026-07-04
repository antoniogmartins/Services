package Carts;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class updateCart {

    @Test
    public static void updateCart() {

            String json = "{\n" +
                    "    \"products\": [\n" +
                    "      {\n" +
                    "        \"id\": 1,\n" +
                    "        \"quantity\": 10000\n" +
                    "      }\n" +
                    "    ]\n" +
                    "  }";

            Response resposta = given()
                    .baseUri("https://dummyjson.com")
                    .header("Content-Type", "application/json")
                    .body(json)
                    .when()
                    .put("/carts/1")
                    .then()
                    .statusCode(200)
                    .extract()
                    .response();

            System.out.println("Body: " + resposta.getBody().prettyPrint());
            String id = resposta.jsonPath().getString("id");
            String title = resposta.jsonPath().getString("products.title");
            System.out.println("Id: " + id);
            System.out.println("Title of Product: " + title);

    }
}
