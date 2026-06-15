package tests;

import config.BaseTest;
import io.restassured.response.Response;
import models.User;
import org.junit.jupiter.api.Test;
import services.UserService;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class CreateUserTest extends BaseTest {

    UserService userService =
            new UserService();

    @Test
    void shouldCreateUser() {

        User user =
                new User(
                        "Antonio Martins",
                        "QA Automation");

        Response response =
                userService.createUser(user);

        assertThat(
                response.statusCode(),
                equalTo(201));

        assertThat(
                response.jsonPath()
                        .getString("name"),
                equalTo("Antonio Martins"));

        assertThat(
                response.jsonPath()
                        .getString("job"),
                equalTo("QA Automation"));
    }
}