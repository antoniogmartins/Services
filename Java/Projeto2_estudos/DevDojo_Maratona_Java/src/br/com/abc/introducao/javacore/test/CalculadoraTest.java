package br.com.abc.introducao.javacore.test;

import br.com.abc.introducao.javacore.classes.Calculadora;

public class CalculadoraTest{

    public static void main(String[] args) {
        Calculadora calculadora = new Calculadora();
        calculadora.somaDoisNumeros();
        calculadora.subtraiDoisNumeros();
        calculadora.multiplicaDoisNumeros(5, 3);
        calculadora.divideDoisNumeros(10.5, 2.0);
    }
}
