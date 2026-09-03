package Utils;

public class geracorpousuarioEstatico {

    public static String gerarMassadeDadosUsuarioEstatico(){

        criarusuarioEstatico criarusuarioestatico = new criarusuarioEstatico("fulano@qa.com","teste");
        String email = criarusuarioestatico.getEmail();
        String password = criarusuarioestatico.getPassword();

        String body = "{\n" +
                "  \"email\": \""+email+"\",\n" +
                "  \"password\": \""+password+"\"\n" +
                "}";

        return body;
    }
}