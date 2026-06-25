package tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import io.restassured.response.Response;
import static org.hamcrest.Matchers.*;


public class TestExamples {
	
	 @Test
		public void Testsnormal() {
			
			 baseURI = "https://reqres.in/api";
			
	         Response resposta = 

	        	        given()
	                    .header("content-type", "application/json")
	                    .header("x-api-key", "reqres_33e8bcb4616245f0b5bec6550b53b8d8")
	                    
	                    .when()
	                    .get("/users/2");
	         
	         System.out.println("Json: "+ resposta.asString());
	       
	         System.out.println("Status Code: "+ resposta.statusCode());

	         System.out.println("Time: "+ resposta.getTime());
	         
	         System.out.println("Status Line: "+ resposta.getStatusLine());
	         
	         System.out.println("Header: "+ resposta.getHeader("content-type"));
	         
	         Assert.assertEquals(resposta.getStatusCode(), 200);
		}

		@Test
		public void TestsGet01() {
		
			baseURI = "https://reqres.in/api";
		
			given()
			      .headers("content-type","application/json")
			      .headers("x-api-key", "reqres_33e8bcb4616245f0b5bec6550b53b8d8")
			
			.when()
			      .get("/users")	  
				  
			.then()
			      .statusCode(200)
			      .body("data[1].id", is(2))
			      .log().all()
			      
			      ;
			
		}

}
