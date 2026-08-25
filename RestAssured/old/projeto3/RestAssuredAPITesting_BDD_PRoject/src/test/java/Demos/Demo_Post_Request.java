package Demos;

import org.testng.annotations.Test;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;



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

public class Demo_Post_Request {
	
	
	 @Test
	 public void getWeatherDetails() 
	 {
	    
		    baseURI = "https://api.restful-api.dev/";
		    
		    String body = "{\n"
		    		+ "  \"name\": \"Apple MacBook Pro 18\",\n"
		    		+ "  \"data\": {\n"
		    		+ "    \"year\": 2019,\n"
		    		+ "    \"price\": 1849.99,\n"
		    		+ "    \"CPU model\": \"Intel Core i8\",\n"
		    		+ "    \"Hard disk size\": \"1 TB\"\n"
		    		+ "  }\n"
		    		+ "}";
		    
		    Response resposta  = 
		   
		    given()
		       .header("x-api-key", "4f7dfc0d-c810-4189-b0c9-da03bea5c317")
		       .header("Content-type", "Application/Json")
		    
		    .when()
		        .body(body)
		        .post (baseURI + "collections/celular/objects");
		        
		    resposta.
		         then()
		         .statusCode(200)
		         .statusLine("HTTP/1.1 200 OK");
		    
		    System.out.println(resposta.asPrettyString());
                		 
	 }

}
