package introducao.controledefluxo;

public class ControleFluxo1 {

    static void main() {
        int idade = 20;
        double salario = 3500.00;
        boolean c = false;

        if (idade >= 18 && salario >= 3000) {
            System.out.println("O trabalhador(a) é maior de idade e possui um salário acima de R$3000,00.");
        } else if (idade >= 18 && salario < 3000) {
            System.out.println("O trabalhador(a) é maior de idade, mas possui um salário abaixo de R$3000,00.");
        } else if (idade < 18 && salario >= 3000) {
            System.out.println("O trabalhador(a) é menor de idade, mas possui um salário acima de R$3000,00.");
        } else {
            System.out.println("O trabalhador(a) é menor de idade e possui um salário abaixo de R$3000,00.");
        }

        if(c == true) {
            System.out.println("A variável c é verdadeira.");
        }else{
            System.out.println("A variável c é falsa.");
        }

    }
}
