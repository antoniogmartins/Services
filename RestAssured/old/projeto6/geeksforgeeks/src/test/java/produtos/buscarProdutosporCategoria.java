package produtos;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class buscarProdutosporCategoria {

    @Test
    public static void buscarProdutosporCategoria() {

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .when()
                .get("/products/category/smartphones")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.getBody().prettyPrint());

    }
}
