package Carts;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class deleteCart {

    @Test
    public static void deleteCart() {

            Response resposta = given()
                    .baseUri("https://dummyjson.com")
                    .header("Content-Type", "application/json")
                    .body("{}")
                    .when()
                    .delete("/carts/1")
                    .then()
                    .statusCode(200)
                    .extract()
                    .response();

            System.out.println("Body: " + resposta.getBody().prettyPrint());
            String id = resposta.jsonPath().getString("id");
            String title = resposta.jsonPath().getString("products.title[1]");
            System.out.println("Id: " + id);
            System.out.println("Title of Product: " + title);

    }
}
