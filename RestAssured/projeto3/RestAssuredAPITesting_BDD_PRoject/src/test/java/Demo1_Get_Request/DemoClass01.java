package Demo1_Get_Request;

import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;


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

public class DemoClass01 {
	
	
	 @Test
	 public void getWeatherDetails() 
	 {
	    
		    baseURI = "https://api.restful-api.dev/";
		    
		    Response resposta  = 
		    given()
		       .header("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317")
		       .header("Content-type", "Application/Json")
		    
		    .when()
		        .get (baseURI + "collections");
		    
		        
		    resposta.then().statusCode(200);
		    System.out.println(resposta.asPrettyString());
                		 
	 }

}
