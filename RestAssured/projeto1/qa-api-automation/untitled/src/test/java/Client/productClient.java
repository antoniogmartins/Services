package Client;

import Config.config;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

public class productClient {

    public Response getProducts() {
        Response resposta = given()
                .when()
                .get(config.host()+ config.hostProdutos())
                .then()
                .extract()
                .response();


        return resposta;
    }


}
