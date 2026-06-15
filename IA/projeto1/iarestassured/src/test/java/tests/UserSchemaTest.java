package tests;

import config.BaseTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class UserSchemaTest
        extends BaseTest {

    @Test
    void shouldValidateSchema() {

        given()

        .when()
            .get("/users/2")

        .then()
            .statusCode(200)
            .body(
                matchesJsonSchemaInClasspath(
                    "schemas/user-schema.json"));
    }
}