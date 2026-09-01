package com.thecat.Config;

import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;
import org.junit.jupiter.api.BeforeAll;
import static io.restassured.RestAssured.given;

public class BaseTest {

    protected static RequestSpecification requestSpec;

    @BeforeAll
    static void setup() {

//        RestAssuredConfig.setup();
        RestAssured.baseURI = ConfigManager.getBaseUrl();

    }
}
