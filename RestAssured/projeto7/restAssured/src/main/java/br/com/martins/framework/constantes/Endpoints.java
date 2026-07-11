package br.com.martins.framework.constantes;

public final class Endpoints {

    private Endpoints() {
    }

    /* AUTH */

    public static final String LOGIN = "/auth/login";

    public static final String REFRESH = "/auth/refresh";

    public static final String CURRENT_USER = "/auth/me";



    /* USERS */

    public static final String USERS = "/users";

    public static final String USER_BY_ID = "/users/{id}";



    /* PRODUCTS */

    public static final String PRODUCTS = "/products";

    public static final String PRODUCT_BY_ID = "/products/{id}";



    /* CARTS */

    public static final String CARTS = "/carts";



    /* POSTS */

    public static final String POSTS = "/posts";



    /* TODOS */

    public static final String TODOS = "/todos";

}