package br.com.abc.javacore.sobrecargaconstrutores.test;

import br.com.abc.javacore.sobrecargaconstrutores.classes.Estudante;

public class EstudanteTest {

    static void main() {
        Estudante estudante = new Estudante(12345, "João", 20, "140826", new double[]{8.5, 9.0, 7.5});
        estudante.imprime();
    }
}
