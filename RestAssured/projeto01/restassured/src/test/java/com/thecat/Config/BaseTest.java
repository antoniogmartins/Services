package com.thecat.Config;

import org.junit.jupiter.api.BeforeAll;

public class BaseTest {

    @BeforeAll
    static void setup() {

        RestAssuredConfig.setup();
    }
}
