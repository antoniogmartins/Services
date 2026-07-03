package Auth;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class logarGerarToken {

   public String loginUserToken() {

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

    System.out.println("Body: " + resposta.getBody().asPrettyString());
    String access = resposta.jsonPath().getString("accessToken");
    String refresh = resposta.jsonPath().getString("refreshToken");
    System.out.println("Acesstoken: " + access);
    System.out.println("RefreshToken: " + refresh);


    return access;

    }



}
