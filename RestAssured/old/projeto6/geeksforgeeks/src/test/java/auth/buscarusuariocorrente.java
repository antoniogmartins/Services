package auth;

import io.restassured.response.Response;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;

public class buscarusuariocorrente {

    @Test
    public void buscarUsuarioValido(){

        gerarToken auth = new gerarToken();

        String token = auth.token_USUARIO_SENHAS_validos();

       // System.out.println("token na volta: " + token);

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + token)
                .body("{}")
                .when()
                .get("/auth/me")
                .then()
                .statusCode(200)
                .extract()
                .response();

        //System.out.println("Body: " + resposta.getBody().prettyPrint());
        System.out.println("Body: " + resposta.getStatusCode());

        userResponse Retorno = resposta.as(userResponse.class);
        System.out.println("First Name: " + Retorno.getFirstName());
        System.out.println("Last Name: " + Retorno.getLastName());
        System.out.println("Age: " + Retorno.getAge());
        System.out.println("Email: " + Retorno.getEmail());


    }

    @Test
    public void buscarUsuariocomUsuarioInvalido(){

        gerarToken auth = new gerarToken();

        String token = auth.token_USUARIO_invalido();

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + token)
                .body("{}")
                .when()
                .get("/auth/me")
                .then()
       //         .statusCode(401)
                .extract()
                .response();

        System.out.println("Body: " + resposta.getBody().prettyPrint());

    }

    @Test
    public void buscarUsuariocomSenhaInvalida(){

        gerarToken auth = new gerarToken();

        String token = auth.token_SENHA_invalida();

        Response resposta = given()
                .baseUri("https://dummyjson.com")
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + token)
                .body("{}")
                .when()
                .get("/auth/me")
                .then()
                //         .statusCode(401)
                .extract()
                .response();

        System.out.println("Body: " + resposta.getBody().prettyPrint());

    }
}
