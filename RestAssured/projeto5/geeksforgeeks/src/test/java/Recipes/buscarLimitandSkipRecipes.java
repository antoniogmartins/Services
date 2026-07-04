package Recipes;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class buscarLimitandSkipRecipes {

    @Test
    public static void buscarLimitandRecipes() {

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .when()
                .get("/recipes/1")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.getBody().prettyPrint());

    }
}
