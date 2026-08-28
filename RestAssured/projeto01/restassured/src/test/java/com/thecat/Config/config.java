package com.thecat.Config;

public class config {

    private static final String base_Url = "https://jsonplaceholder.typicode.com/";
    private static final String base_endPoint_Cadastro = "posts/1";

    public static String host(){
        return base_Url;
    }
    public static String hostCadastro(){
        return base_endPoint_Cadastro;
    }
}
