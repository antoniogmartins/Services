package Carts;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class adicionarCart {

    @Test
    public static void adicionarCart() {

            String json = "{\n" +
                    "\n" +
                    "   \"userId\": 1,\n" +
                    "   \"products\": [ { \n" +
                    "                \"id\": 144, \n" +
                    "                \"quantity\": 4\n" +
                    "               },\n" +
                    "               {\n" +
                    "                \"id\": 98, \n" +
                    "                \"quantity\": 4\n" +
                    "               }\n" +
                    "   ]\n" +
                    "}";

            Response resposta = given()
                    .baseUri("https://dummyjson.com")
                    .header("Content-Type", "application/json")
                    .body(json)
                    .when()
                    .post("/carts/add")
                    .then()
                    .statusCode(201)
                    .extract()
                    .response();

            System.out.println("Body: " + resposta.getBody().prettyPrint());
            String id = resposta.jsonPath().getString("id");
            String title = resposta.jsonPath().getString("products.title[0]");
            System.out.println("Id: " + id);
            System.out.println("Title of Product: " + title);

    }
}
