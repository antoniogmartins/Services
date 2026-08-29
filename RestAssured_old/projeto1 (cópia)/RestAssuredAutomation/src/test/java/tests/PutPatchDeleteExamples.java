package tests;

import static io.restassured.RestAssured.*;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;

public class PutPatchDeleteExamples {
	
	@Test
	public void TestsPut() {
		
		baseURI = "https://reqres.in/api";
		
		Map<String, Object> map = new HashMap<String, Object>();
	
		map.put("name", "morpheus1");
		map.put("job", "zion resident");
		
//		System.out.println("Map: "+ map);
		
		JSONObject json = new JSONObject(map);
		
		given()
		      .header("content-type","application/json")
			   .headers("x-api-key", "reqres_33e8bcb4616245f0b5bec6550b53b8d8")
		      .contentType(ContentType.JSON)
		      .accept(ContentType.JSON)
              .body(json.toString())			      
		.when()
	          .put("/users/2")
        .then()
		      .statusCode(200)
		      .log().all()
	    ;
		
	}

	@Test
	public void TestPatch() {
		
		baseURI = "https://reqres.in/api";
		
		Map<String, Object> map = new HashMap<String, Object>();
	
		map.put("name", "morpheus1");
		map.put("job", "zion resident");
		
//		System.out.println("Map: "+ map);
		
		JSONObject json = new JSONObject(map);
		
		given()
		      .header("content-type","application/json")
			  .headers("x-api-key", "reqres_33e8bcb4616245f0b5bec6550b53b8d8")
		      .contentType(ContentType.JSON)
		      .accept(ContentType.JSON)
              .body(json.toString())			      
		.when()
	          .patch("/users/2")
        .then()
		      .statusCode(200)
		      .log().all()
	    ;
		
	}
	
	@Test
	public void TestDelete() {
		
		baseURI = "https://reqres.in/api";
		
		given()
	     	   .headers("x-api-key", "reqres_33e8bcb4616245f0b5bec6550b53b8d8")
				
		.when()
	          .delete("/users/2")
        .then()
		      .statusCode(204)
		      .log().all()
	    ;
		
	}
	
}
