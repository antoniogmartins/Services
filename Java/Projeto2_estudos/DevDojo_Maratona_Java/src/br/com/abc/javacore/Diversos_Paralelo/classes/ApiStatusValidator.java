package br.com.abc.javacore.Diversos_Paralelo.classes;

public class ApiStatusValidator {

    public static boolean isSuccess(int statusCode) {
        return statusCode >= 200 && statusCode <= 299;

    }

}