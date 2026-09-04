package Data;

import Utils.CriarusuarioEstatico;

public class GerarcorpousuarioEstatico {

    public static String gerarcorpousuarioEstatico(){

        CriarusuarioEstatico criarusuarioestatico = new CriarusuarioEstatico("fulano@qa.com","teste");
        String email = criarusuarioestatico.getEmail();
        String password = criarusuarioestatico.getPassword();

        String body = "{\n" +
                "  \"email\": \""+email+"\",\n" +
                "  \"password\": \""+password+"\"\n" +
                "}";

        return body;
    }
}