package com.thecat.Config;

import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeAll;

public class BaseTest {

    @BeforeAll
    static void setup() {

//        RestAssuredConfig.setup();
        RestAssured.baseURI = ConfigManager.getBaseUrl();
    }
}
