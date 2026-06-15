package tests;

import config.BaseTest;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import services.UserService;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class GetUserTest extends BaseTest {

    UserService userService =
            new UserService();

    @Test
    void shouldGetUser() {

        Response response =
                userService.getUser(2);

        assertThat(
                response.statusCode(),
                equalTo(200));

        assertThat(
                response.jsonPath()
                        .getInt("data.id"),
                equalTo(2));

        assertThat(
                response.jsonPath()
                        .getString("data.first_name"),
                equalTo("Janet"));
    }
}
