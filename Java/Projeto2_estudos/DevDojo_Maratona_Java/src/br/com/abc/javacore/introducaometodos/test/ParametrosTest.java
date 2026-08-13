package br.com.abc.javacore.introducaometodos.test;

import br.com.abc.javacore.introducaometodos.classes.Calculadora;

public class ParametrosTest {

    public static void main(String[] args) {
        Calculadora calculadora = new   Calculadora();
        int num1 = 10;
        int num2 = 20;
        calculadora.alteraDoisNumeros(num1, num2);
        System.out.println("Dentro do Teste que chama a função alteraDoisNumeros");
        System.out.println("Num1: " + num1);
        System.out.println("Num2: " + num2);

    }
}
