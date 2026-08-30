package com.thecat.Config;

public class config1 {

    private static final String base_url = "https://jsonplaceholder.typicode.com/";
    private static final String base_buscarecurso = "posts/1";
    private static final String base_listar_todos_recursos = "posts";
    private static final String base_filtrar_recursos = "posts?userId=1";
    private static final String base_listar_hierarquia_recursos = "posts/1/comments";
    private static final String base_criar_recurso = "posts/";
    private static final String base_atualizar_deletar_recurso = "1";

    public static String host(){
        return base_url;
    }
    public static String host_buscarRecurso(){
        return base_buscarecurso;
    }
    public static String host_listartodosRecursos(){
        return base_listar_todos_recursos;
    }
    public static String host_filtrarRecursos(){
        return base_filtrar_recursos;
    }
    public static String host_listar_hierarquia_Recursos(){
        return base_listar_hierarquia_recursos;
    }
    public static String host_criar_Recurso(){
        return base_criar_recurso;
    }
    public static String host_atualizar_deletar_Recurso(){
        return base_atualizar_deletar_recurso;
    }






}
