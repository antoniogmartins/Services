import java.util.Scanner;

public class Aula04 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int nota1=1,nota2=0,nota3=0,nota4=0,soma=0, med=60;
        float media=0.0f;
        String nome = "";

        System.out.println("Digite seu nome: ");
        nome = scan.nextLine();
        System.out.println("Digite a primeira nota: ");
        nota1 = scan.nextInt();
        System.out.println("Digite a segunda nota: ");
        nota2 = scan.nextInt();
        System.out.println("Digite a terceira nota: ");
        nota3 = scan.nextInt();
        System.out.println("Digite a quarta nota: ");
        nota4 = scan.nextInt();
        soma = nota1 + nota2 + nota3 + nota4;
        media = soma / 4;
        System.out.printf("A soma é: %d%n", soma);
        System.out.printf("A média é: %.2f%n", media);
        System.out.printf("%s : a soma de %d com %d com %d e %d é igual a %d%n", nome, nota1, nota2, nota3, nota4, soma);
        System.out.printf("%s : a media de %d com %d com %d e %d é igual a %.2f%n", nome, nota1, nota2, nota3, nota4, media);
        if(soma >= med){
            System.out.printf("%s : você foi aprovado com a soma de %d%n", nome, soma);
        } else if (soma >=50) {
            System.out.printf("%s : você está em recuperação com a soma de %d%n", nome, soma);
        } else {
            System.out.printf("%s : você foi reprovado com a soma de %d%n", nome, soma);
        }
    }
}