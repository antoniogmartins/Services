package br.com.abc.javacore.Diversos_Paralelo.test;

import br.com.abc.javacore.Diversos_Paralelo.classes.ApiStatusValidator;
import br.com.abc.javacore.Diversos_Paralelo.classes.TestCase;

public class TestCaseTests {

    public static void main(String [] args) {
        TestCase testcase =
                new TestCase("Create User", "/users", "POST", 201, true);

        System.out.println(testcase);

        System.out.println("Status Code: "+ApiStatusValidator.isSuccess(400));
        System.out.println(ApiStatusValidator.isSuccess(199));
        System.out.println(ApiStatusValidator.isSuccess(200));
        System.out.println(ApiStatusValidator.isSuccess(201));
        System.out.println(ApiStatusValidator.isSuccess(204));
        System.out.println(ApiStatusValidator.isSuccess(299));
        System.out.println(ApiStatusValidator.isSuccess(300));
        System.out.println(ApiStatusValidator.isSuccess(400));
        System.out.println(ApiStatusValidator.isSuccess(500));
    }
}
