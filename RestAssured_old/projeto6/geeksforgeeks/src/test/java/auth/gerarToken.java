package auth;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class gerarToken {

    public String token_USUARIO_SENHAS_validos() {


   /*String json = "{\n" +

            "    \"username\": \"emilys\",\n" +
            "    \"password\": \"emilyspass\",\n" +
            "    \"expiresInMins\": 30\n" +
            "}";
   */
        userRequest userRequest = new userRequest("emilys", "emilyspass", 30);
//       userRequest.setUsername("emilys");
//       userRequest.setPassword("emilyspass");
//       userRequest.setExpiresInMis(30);

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .body(userRequest)
                .when()
                .post("/auth/login")
                .then()
                .statusCode(200)
                .extract()
                .response();

        System.out.println("Body: " + resposta.getBody().prettyPrint());
        String access = resposta.jsonPath().getString("accessToken");
        String refresh = resposta.jsonPath().getString("refreshToken");
        System.out.println("Acesstoken: " + access);
        System.out.println("RefreshToken: " + refresh);
        return access;
    //    return resposta.asPrettyString();

    }

    public String token_USUARIO_invalido() {

        userRequest userRequest = new userRequest("usuario_invalido", "emilyspass", 30);

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .body(userRequest)
                .when()
                .post("/auth/login")
                .then()
      //          .statusCode(401)
                .extract()
                .response();

     //  System.out.println("Body: " + resposta.getBody().asPrettyString());
        //return "usuario inválido";
        return resposta.asPrettyString();
    }

    public String token_SENHA_invalida() {

        userRequest userRequest = new userRequest("emilys", "senha_invalida", 30);

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .body(userRequest)
                .when()
                .post("/auth/login")
                .then()
                .statusCode(400)
                .extract()
                .response();

     //   System.out.println("Body: " + resposta.getBody().asPrettyString());
        //return "senha inválido";
        return resposta.asPrettyString();
    }

}
