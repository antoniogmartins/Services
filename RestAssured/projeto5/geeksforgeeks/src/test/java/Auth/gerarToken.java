package Auth;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class gerarToken {

   public String login_usuarioesenha_validos() {

   String json = "{\n" +
            "    \"username\": \"emilys\",\n" +
            "    \"password\": \"emilyspass\",\n" +
            "    \"expiresInMins\": 30\n" +
            "}";

 //   @Test
   Response resposta = given()
        .baseUri("https://dummyjson.com")
        .header("Content-Type", "application/json")
        .body(json)
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

    }

    public String login_usuario_invalidos() {

        String json = "{\n" +
                "    \"username\": \"usuarioinvalido\",\n" +
                "    \"password\": \"emilyspass\",\n" +
                "    \"expiresInMins\": 30\n" +
                "}";

        //   @Test
        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .body(json)
                .when()
                .post("/auth/login")
                .then()
                .statusCode(400)
                .extract()
                .response();

        System.out.println("Body: " + resposta.getBody().asPrettyString());
        return "usuario inválido";
    }

    public String login_senha_invalidos() {

        String json = "{\n" +
                "    \"username\": \"emilys\",\n" +
                "    \"password\": \"senha_invalida\",\n" +
                "    \"expiresInMins\": 30\n" +
                "}";

        //   @Test
        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .body(json)
                .when()
                .post("/auth/login")
                .then()
                .statusCode(400)
                .extract()
                .response();

        System.out.println("Body: " + resposta.getBody().asPrettyString());
        return "senha inválido";
    }

}
