package br.com.abc.introducao.controledefluxo;

public class ExercicioControleFluxo {

    static void main() {
        double salario = 3900;
        double imposto = 0;

        if(salario < 1000) {
            imposto = salario * 0.05;
        } else if(salario >=1000 && salario < 2000) {
            imposto = salario * 0.10;
        } else if(salario >=2000 && salario < 4000.00) {
            imposto = salario * 0.15;
        } else {
            imposto = salario * 0.20;
        }
        System.out.println("Salario R$: " + salario);
        System.out.println("Imposto R$: " + imposto);
        System.out.println("Salario - Imposto R$: " + (salario - imposto));

    }
}
