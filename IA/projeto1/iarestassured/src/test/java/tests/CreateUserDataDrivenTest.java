package tests;

import config.BaseTest;
import models.User;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import services.UserService;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class CreateUserDataDrivenTest
        extends BaseTest {

    UserService service =
            new UserService();

    @ParameterizedTest
    @CsvSource({
            "Antonio Martins,QA",
            "Maria Silva,PO",
            "Carlos Souza,Developer"
    })
    void shouldCreateUsers(
            String name,
            String job) {

        User user =
                new User(name, job);

        var response =
                service.createUser(user);

        assertThat(
                response.statusCode(),
                equalTo(201));
    }
}