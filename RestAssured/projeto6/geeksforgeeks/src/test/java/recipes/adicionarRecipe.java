package recipes;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class adicionarRecipe {

    @Test
    public static void adicionarRecipe() {


        String json = "{\"name\": \"Tasty Pizza\"}";

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .body(json)
                .when()
                .post("/recipes/add")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.getBody().prettyPrint());

    }
}
