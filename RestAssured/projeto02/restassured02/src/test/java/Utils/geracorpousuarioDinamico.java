package Utils;

public class geracorpousuarioDinamico {

    public static String gerarMassadeDadosUsuarioDinamica(){

        criarusuarioDinamico criarUsuarioDinamico = new criarusuarioDinamico();
        String nome = criarusuarioDinamico.gerarnomeDinamico();
        String email = criarusuarioDinamico.gerarEmailDinamico(nome);
        String password = criarusuarioDinamico.gerarPasswordDinamico(12);

        String body = "{\n" +
                "                     \"nome\": \"" + nome + "\",\n" +
                "                     \"email\": \"" + email + "\",\n" +
                "                     \"password\": \"" + password + "\",\n" +
                "                     \"administrador\": \"true\"\n" +
                "}";

        return body;

    }
}