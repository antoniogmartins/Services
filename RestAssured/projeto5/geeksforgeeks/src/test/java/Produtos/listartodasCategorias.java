package Produtos;

import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class listartodasCategorias {

    @Test
    public static void listartodasCategorias() {

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .when()
                .get("/products/category-list")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.prettyPeek());

    }
}
