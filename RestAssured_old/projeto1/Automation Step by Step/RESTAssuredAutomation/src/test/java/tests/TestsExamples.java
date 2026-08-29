package tests;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import static org.hamcrest.Matchers.*;

public class TestsExamples {

	
	@Test
	public static void teste1() {

		given()
		
		.when()
        	.get("https://dummyjson.com/products")
		
		.then()
		    .statusCode(200)
		    .body("products.size()", greaterThan(0));
		
		
	}
	
	@Test
	public static void teste2() {

		Response response = RestAssured.get("https://dummyjson.com/products");

		System.out.println("Status Code: " + response.getStatusCode());
	    System.out.println("Body:");
	    System.out.println(response.getBody().asString());
	    System.out.println(response.getTime());
		
		
	}
	

}
