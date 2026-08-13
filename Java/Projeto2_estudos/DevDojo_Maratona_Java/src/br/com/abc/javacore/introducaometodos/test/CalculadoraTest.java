package br.com.abc.javacore.introducaometodos.test;

import br.com.abc.javacore.introducaometodos.classes.Calculadora;

public class CalculadoraTest{

    public static void main(String[] args) {
        Calculadora calculadora = new Calculadora();
        calculadora.somaDoisNumeros();
        calculadora.subtraiDoisNumeros();
        calculadora.multiplicaDoisNumeros(5.55, 3);
        calculadora.divideDoisNumeros(10.5, 0.0);
        calculadora.divideDiferenteNumeros(10.5, 0.0);

    }
}
