package services;

import io.restassured.response.Response;
import models.User;

import static io.restassured.RestAssured.given;

public class UserService {

    public Response getUser(Integer id) {

        return given()

                .when()
                .get("/users/" + id)

                .then()
                .extract()
                .response();
    }

    public Response createUser(User user) {

        return given()
                .contentType("application/json")
                .body(user)

                .when()
                .post("/users")

                .then()
                .extract()
                .response();
    }
}