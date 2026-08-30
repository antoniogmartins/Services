package com.thecat.Config;

import io.restassured.RestAssured;

public class RestAssuredConfig {

        public static void setup() {

            RestAssured.baseURI = ConfigManager.getBaseUrl();
        }

}
