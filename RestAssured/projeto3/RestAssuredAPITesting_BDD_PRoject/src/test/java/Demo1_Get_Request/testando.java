package Demo1_Get_Request;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;


public class testando {
	
	@Test
	public static void Testando() {
    
	RestAssured.baseURI = "https://api.restful-api.dev";

    given()
    .when()
        .get("/objects")
    .then()
        .statusCode(200);
}
	

}
