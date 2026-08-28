package com.thecat.Config;

public class config {

    private static final String base_Url = "https://jsonplaceholder.typicode.com/";
    private static final String base_buscarecurso = "posts/1";
    private static final String base_listar_recursos = "posts";
    private static final String base_filtrar_recursos = "posts?userId=1";

    public static String host(){
        return base_Url;
    }
    public static String hostbuscarRecurso(){
        return base_buscarecurso;
    }
    public static String hostlistarRecursos(){
        return base_listar_recursos;
    }
    public static String hostfiltrarRecursos(){
        return base_filtrar_recursos;
    }
}
