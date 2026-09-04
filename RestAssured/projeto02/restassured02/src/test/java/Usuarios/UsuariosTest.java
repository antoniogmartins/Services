package Usuarios;

import static Config.BaseTest.*;
import static Data.GerarcorpousuarioDinamico.*;
import io.restassured.response.*;
import org.junit.jupiter.api.*;
import static io.restassured.RestAssured.*;
import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UsuariosTest {

   private static String url;
//   private static String acessToken;
   private static String idusuario;
   private static String email;
   private static String corpo;

   Response resposta;

    @BeforeAll
    public static void setup() {
        url = Dados();
        corpo = gerarcorpousuarioDinamico();
    }

    @Test
    @Order(1)
    public void testlistarUsuarios(){

          resposta = given()
                  .contentType("application/json")
                  .when()
                  .get(url + "/usuarios")
                  .then()
                  .statusCode(200)
                  .extract()
                  .response();
       }

    @Test
    @Order(2)
    public void testcadastrarUsuarios() {
        //String body = gerarMassadeDadosUsuarioDinamica();

        resposta = given()
                .body(corpo)
                    .contentType("application/json")
                .when()
                    .post(url + "/usuarios")
                .then()
                    .statusCode(201)
                    .extract()
                    .response();

        idusuario = resposta.jsonPath().getString("_id");
        System.out.println("ID do usuário: " + idusuario);

    }
    @Test
    @Order(3)
    public void testbuscausuarioporId(){
    //    System.out.println("ID do usuário: " + idusuario);
        resposta = given()
                   .contentType("application/json")
                .when()
                   .get(url + "/usuarios/"+idusuario)
                .then()
                   .statusCode(200)
                   .extract()
                   .response();
        
        email = resposta.jsonPath().getString("email");
        System.out.println("Email do usuário: " + email);

    }
    @Test
    @Order(4)
    public void testbuscausuarioporquery_Email(){
        resposta = given()
                .contentType("application/json")
                .when()
                .get(url + "/usuarios?email="+email)
                .then()
                .statusCode(200)
                .extract()
                .response();
    }

    @Test
    @Order(5)
    public void testalterarUsuarios() {

      //  String body = gerarMassadeDadosUsuarioDinamica();
        resposta = given()
                .body(corpo)
                .contentType("application/json")
                .when()
                .put(url + "/usuarios/"+idusuario)
                .then()
                .statusCode(200)
                .extract()
                .response();

    }

    @Test
    @Order(6)
    public void testdeletarUsuario(){
        resposta = given()
                .contentType("application/json")
                .when()
                .delete(url + "/usuarios/"+idusuario)
                .then()
                .statusCode(200)
                .extract()
                .response();

           String mensagemEsperada = "Registro excluído com sucesso";
           String mensagemRetornada = resposta.jsonPath().getString("message");
           assertEquals(mensagemEsperada, mensagemRetornada);
    }

}
