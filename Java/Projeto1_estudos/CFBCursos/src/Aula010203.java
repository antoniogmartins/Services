public class Aula010203 {

    public static void main(String[] args) {

//        Exercicio01 exercise = new Exercicio01();
        verificarSituacaoAluno();
        funcaoternaria();
        casoSwitch();
    }

    private static int nota = 15;
    private static int faltas = 2;
    private static int maxxfaltas = 5;
    private static int media = 60;
    private static String status = "";

    public static String verificarSituacaoAluno() {

        System.out.println("Inicio do programa - 1 validação com if/else");

        if (nota >= media && faltas <= maxxfaltas) {
            status = "Aprovado";
        } else if (nota >= 40) {
            status = "Recuperação";
        } else {
            status = "Reprovado";
        }
        ;

        System.out.println("Situação do Aluno: " + status);
        System.out.println("Fim do programa - 1 validação com if/else\"");
        System.out.println("===============================================================");
        return status;
    }

    public static String funcaoternaria() {

        nota = 85;
        System.out.println("Inicio do programa - 2 validação com ternarios");


        status = (nota >= media && faltas <= maxxfaltas) ?
                "Aprovado" : (nota >= 40) ? "Recuperação" : "Reprovado";

        System.out.println("Situação do Aluno: " + status);
        System.out.println("Fim do programa - 2 validação com ternarios\"");
        System.out.println("===============================================================");
        return status;
    }

    public static String casoSwitch() {
        System.out.println("Inicio do programa - 3 validação com switch");
        int pos = 6;
        switch (pos) {
            case 1:
                status = "Primeiro Lugar";
                break;
            case 2:
                status = "Segundo Lugar";
                break;
            case 3:
                status = "Terceiro Lugar";
                break;
            case 4: case 5: case 6:
                status = "Quarto Lugar";
                break;
            default:
                status = "Inválida";
                break;
        }
        System.out.println( "Situação do Aluno: " + status);
        System.out.println("Fim do programa - 3 validação com switch\"");
        return status;
     }
}


