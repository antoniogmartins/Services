package br.com.abc.introducao.operadores;

public class OperadoresLogicos {

    static void main() {
        int idade = 18;
        float salario = 1000f;

        System.out.println("Idade: " + idade);
        System.out.println("Salário: " + salario);
        System.out.println("valor: " + (idade >=18 && salario >= 9000f));
        System.out.println("valor: " + (idade >=18 || salario >= 9000f));

    }
}
