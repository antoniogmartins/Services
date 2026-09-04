package Utils;

import java.security.SecureRandom;

public class CriarusuarioDinamico {

    private static final SecureRandom random = new SecureRandom();

    public static String gerarnomeDinamico() {
        String[] nomes = {
                "Joao", "Maria", "Carlos", "Ana",
                "Pedro", "Julia", "Lucas", "Beatriz"
        };

        String[] sobrenomes = {
                "Silva", "Santos", "Oliveira", "Souza",
                "Costa", "Pereira", "Almeida", "Ferreira"
        };

        return nomes[random.nextInt(nomes.length)] + " " +
                sobrenomes[random.nextInt(sobrenomes.length)];
    }

    public static String geraremailDinamico(String nome) {
        String nomeEmail = nome
                .toLowerCase()
                .replace(" ", ".");

        int numero = random.nextInt(10000);

        return nomeEmail + numero + "@example.com";
    }

    public static String gerarpasswordDinamico(int tamanho) {
        String caracteres =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
                        "abcdefghijklmnopqrstuvwxyz" +
                        "0123456789" +
                        "!@#$%&*";

        StringBuilder password = new StringBuilder();

        for (int i = 0; i < tamanho; i++) {
            password.append(
                    caracteres.charAt(
                            random.nextInt(caracteres.length())
                    )
            );
        }

        return password.toString();
    }
}