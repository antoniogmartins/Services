package Produtos;

import io.restassured.response.Response;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;

public class GetAllProducts {

    @Test
    public static void teste() {

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .when()
                .get("/products")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Status Code: " + resposta.statusCode());
        System.out.println("headerName: " + resposta.getHeader("headerName"));
        System.out.println("cookieName: " + resposta.getCookie("cookieName"));
        System.out.println("Body: " + resposta.getBody().asString());
        System.out.println("Body Formatado: " + resposta.prettyPeek());

    }
}
