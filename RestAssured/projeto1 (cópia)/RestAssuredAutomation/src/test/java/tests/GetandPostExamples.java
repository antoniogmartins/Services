package tests;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;


public class GetandPostExamples {
	
		@Test
		public void TestsGet02() {
		
			baseURI = "https://reqres.in/api";
		
			given()
			      .headers("x-api-key", "reqres_33e8bcb4616245f0b5bec6550b53b8d8")

            .when()
		      .get("/users?page=2")

			.then()
			      .statusCode(200)
			      .body("data[1].first_name", equalTo("Lindsay"))
			      .body("data.last_name", hasItems("Funke", "Edwards", "Howell", "Fields"))
			      .log().all()
    	    ;
			
		}


		@Test
		public void TestsPost() {
			
			baseURI = "https://reqres.in/api";
			
			Map<String, Object> map = new HashMap<String, Object>();
		
			map.put("name", "morpheus");
			map.put("job", "leader");
			
			System.out.println("Map: "+ map);
			
			JSONObject json = new JSONObject(map);
			
			given()
			      .headers("content-type","application/json")
			      .headers("x-api-key", "reqres_33e8bcb4616245f0b5bec6550b53b8d8")
			      .contentType(ContentType.JSON)
			      .accept(ContentType.JSON)
                  .body(json.toString())			      
			.when()
		          .post("/users")
            .then()
			      .statusCode(201)
			      .log().all()
    	    ;
			
		}

		
}
