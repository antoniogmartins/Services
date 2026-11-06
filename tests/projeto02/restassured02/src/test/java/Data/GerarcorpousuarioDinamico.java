package Data;

import Utils.CriarusuarioDinamico;

public class GerarcorpousuarioDinamico {

    public static String gerarcorpousuarioDinamico(){

        String nome = CriarusuarioDinamico.gerarnomeDinamico();
        String email = CriarusuarioDinamico.geraremailDinamico(nome);
        String password = CriarusuarioDinamico.gerarpasswordDinamico(12);

        return "{\n" +
                "                     \"nome\": \"" + nome + "\",\n" +
                "                     \"email\": \"" + email + "\",\n" +
                "                     \"password\": \"" + password + "\",\n" +
                "                     \"administrador\": \"true\"\n" +
                "}";

    }
}