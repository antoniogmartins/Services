package br.com.abc.introducao.operadores;

public class Operadores {

    static void main() {
        String Nome = "João";
        double salario = 5000.00;
        String sexo = "M";
        int idade = 54;
        String estadocivil = "Casado";

        System.out.println("Nome: " + Nome);
        System.out.println("Salário: " + salario);
        System.out.println("Sexo: " + sexo);
        System.out.println("Idade: " + idade);
        System.out.println("Estado Civil: " + estadocivil);
        System.out.println("O trabalhador(a) " + Nome + " do sexo " + sexo + ", tem "
                +idade + " anos e está "
                + estadocivil + " detém um salario de R$"+ salario
                + " encontra-se em di a com suas obrigações.");

    }
}
