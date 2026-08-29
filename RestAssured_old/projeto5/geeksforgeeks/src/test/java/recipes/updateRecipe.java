package recipes;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class updateRecipe {

    @Test
    public static void updateRecipe() {


        String json = "{\"name\": \"Tasty Gourmet\"}";

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .body(json)
                .when()
                .put("/recipes/1")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.getBody().prettyPrint());

    }
}
