package Demos;

import org.testng.annotations.Test;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;



/* given()
 *        set cookies, add auth, add param, set headers info etc..
 * 
 * when()
 *       get, post, put, delete, patch
 * 
 * then()
 *  validate status code, extract response, extract headers cookis & response body
 *  
 */

public class Demo_Get_Request {
	
	
	 @Test
	 public void com_Sucesso() 
	 {
	    
		    baseURI = "https://api.restful-api.dev/";
		    
		    Response resposta  = 
		    given()
		       .header("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317")
		       .header("Content-type", "Application/Json")
		    
		    .when()
		        .get (baseURI + "collections");
		    
		        
		    resposta.
		         then()
		         .statusCode(200)
		         .statusLine("HTTP/1.1 200 OK")
//		         .assertThat().body("collectionName[1]", equalTo("celular"))
		         .assertThat().body("collectionName", hasItem("celular"))
		        .assertThat().body(matchesJsonSchemaInClasspath("schemas/collections-schema.json"))
		        ;
		    
		    
		    System.out.println(resposta.asPrettyString());
                		 
	 }

	 
	 @Test
	 public void sem_HeaderApplicationJson() 
	 {
	    
		    baseURI = "https://api.restful-api.dev/";
		    
		    Response resposta  = 
		    given()
		       .header("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317")
		       .header("Content-type", "Application/Json")
		    
		    .when()
		        .get (baseURI + "collections");
		    
		        
		    resposta.
		         then()
		         .statusCode(200)
		         .statusLine("HTTP/1.1 200 OK")
//		         .assertThat().body("collectionName[1]", equalTo("celular"))
		         .assertThat().body("collectionName", hasItem("celular"))
		         .assertThat().body(matchesJsonSchemaInClasspath("schemas/collections-schema.json"))
		         ;
		    
		    
		    System.out.println(resposta.asPrettyString());
                		 
	 }
	 
	 @Test
	 public void com_X_Api_keyInvalida() 
	 {
	    
		    baseURI = "https://api.restful-api.dev/";
		    
		    Response resposta  = 
		    given()
		       .header("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c319")
		       .header("Content-type", "Application/Json")
		    
		    .when()
		        .get (baseURI + "collections");
		            
		    resposta.
		         then()
		         .statusCode(403)
		         .body(containsString("Invalid API key"))
		         ;
	                            		 
	 }
}
