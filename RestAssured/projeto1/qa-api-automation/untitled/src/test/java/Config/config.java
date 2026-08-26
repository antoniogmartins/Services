package Config;

public class config {

    private static final String base_Url = "https://dummyjson.com";
    private static final String base_endPoint_Produtos = "/products";

    public static String host(){
       return base_Url;
   }
    public static String hostProdutos(){
        return base_endPoint_Produtos;
    }

}
