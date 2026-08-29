package recipes;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class buscarrecipesbytag {

    @Test
    public static void buscarRecipesByTag() {

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .when()
                .get("/recipes/tag/Pakistani")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.getBody().prettyPrint());

    }
}
