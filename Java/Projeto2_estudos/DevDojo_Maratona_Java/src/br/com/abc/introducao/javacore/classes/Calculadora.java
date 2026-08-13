package br.com.abc.introducao.javacore.classes;

public class Calculadora {

    public void somaDoisNumeros() {
        System.out.println(10 + 10);
    }

    public void subtraiDoisNumeros() {
        System.out.println(10 - 5);
    }
    public void multiplicaDoisNumeros(double num1, int num2) {
        System.out.println(num1 * num2);
    }
    public double divideDoisNumeros(double num1, double num2) {
        if(num2 != 0){
            return num1 / num2;
        } else {
            System.out.println("Não é possível dividir por zero.");
            return 0;
        }
    }
    public void divideDiferenteNumeros(double num1, double num2) {
        if(num2 != 0){
            System.out.println(num1 / num2);
            return;
        } else {
            System.out.println("Não é possível dividir por zero.");
            return;
        }
    }
}
