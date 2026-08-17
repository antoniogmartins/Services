package br.com.abc.javacore.introducaometodos.classes;

public class Calculadora {

    public static void somaDoisNumeros() {
        System.out.println(10 + 10);
    }

    public static void subtraiDoisNumeros() {
        System.out.println(10 - 5);
    }
    public static void multiplicaDoisNumeros(double num1, int num2) {
        System.out.println(num1 * num2);
    }
    public static double divideDoisNumeros(double num1, double num2) {
        if(num2 != 0){
            return num1 / num2;
        } else {
            System.out.println("Não é possível dividir por zero.");
            return 0;
        }
    }
    public static void divideDiferenteNumeros(double num1, double num2) {
        if(num2 != 0){
            System.out.println(num1 / num2);
            return;
        } else {
            System.out.println("Não é possível dividir por zero.");
            return;
        }
    }
    public static void alteraDoisNumeros(int num1, int num2) {
        num1 = 99;
        num2 = 33;
        int soma = num1 + num2;
        System.out.println("Dentro da função alteraDoisNumeros");
        System.out.println("Num1: " + num1);
        System.out.println("Num2: " + num2);
        System.out.println("Soma: " + soma);
    }

    public static void somaArray(int[] numeros) {
        int soma = 0;
        for (int num : numeros) {
            soma += num;
        }
        System.out.println("Soma do array: " + soma);
    }

    public static void somaVarArgs(int... numeros) {
        int soma = 0;
        for (int num : numeros) {
            soma += num;
        }
        System.out.println("Soma do varargs: " + soma);
    }
}
