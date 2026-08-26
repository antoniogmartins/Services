package Tests;

import Client.productClient;
import Validator.productValidator;
import Config.config;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.*;
import io.restassured.response.Response;
import java.util.Arrays;
import java.util.List;

public class productTest {

    //@Test
    public void getProductsSize() {
        Response resposta = given()
                .when()
                .get(config.host()+ config.hostProdutos())
                .then()
                .statusCode(200)
                //.body("products.size()", equalTo(30))
                .extract().response();
        ;
        //System.out.println(resposta.asPrettyString());
        int valorobtido = resposta.jsonPath().getInt("products.size()");
        assertTrue(valorobtido >= 1);
    }

    //@Test
    public void listagemProducts() {
        Response resposta = given()
                .when()
                .get(config.host()+ config.hostProdutos())
                .then()
                //.body("products.size()", equalTo(30))
                .extract().response();
        ;
        //  System.out.println(resposta.asPrettyString());
        List<String> titulos = resposta.jsonPath().getList(("products.title"));
        System.out.println(titulos.toString());
    }

    // @Test
    public void validarProducts() {
        List<String> titulos = Arrays.asList("Notebook", "Mouse", "Teclado");
        for (String titulo : titulos) {
            boolean ehValido = (titulo != null) && (!titulo.isBlank());
            assertTrue(ehValido, "A lista contem um titulo nulo");

        }
    }

    //@Test
    public void listagemArrayProducts() {
        Response resposta = given()
                .when()
                .get(config.host()+ config.hostProdutos())
                .then()
                .statusCode(200)
                .extract().response();
        ;
        List<String> titulos = resposta.jsonPath().getList(("products.title"));
        for (String titulo : titulos) {
            boolean ehValido = (titulo != null) && (!titulo.isBlank());
            assertTrue(ehValido, "A lista contem um titulo nulo ou em branco");

        }

    }

    //@Test
    public void listagemArrayIds() {
        Response resposta = given()
                .when()
                .get(config.host()+ config.hostProdutos())
                .then()
                .statusCode(200)
                .extract().response();
        ;
        List<Integer> ids = resposta.jsonPath().getList(("products.id"));
        for (Integer id : ids) {
            boolean ehValido = (id != null) && (id != 0);
            //System.out.println(ehValido);
            assertTrue(ehValido, "A lista contem um id nulo ou igual a zero");

        }

    }

    //@Test
    public void getProducts(){
        productClient cliente = new productClient();
        // System.out.println(cliente.getProducts().asPrettyString());
        Response resposta = cliente.getProducts();
  //      System.out.println(resposta.asPrettyString());
        assertEquals(200, resposta.statusCode());
        assertEquals(1, resposta.jsonPath().getInt("products[0].id"));
        assertEquals("Eyeshadow Palette with Mirror", resposta.jsonPath().getString("products[1].title"));

    }

    @Test
    public void validarProdutos(){
        productClient cliente = new productClient();
        productValidator validator= new productValidator();

        Response resposta = cliente.getProducts();
        assertEquals(200, resposta.statusCode());
        //System.out.println(resposta.asPrettyString());
        int quantidade = resposta.jsonPath()
                .getList("products")
                .size();

        assertTrue(validator.quantidade(quantidade));

        List<Integer> ids = resposta.jsonPath()
                .getList("products.id");

        for(Integer id: ids){
            boolean ehValido = validator.idValido(id);
            assertTrue(
                    ehValido,
                    "A lista contem um id nulo ou igual a zero");
        }



    }

}
