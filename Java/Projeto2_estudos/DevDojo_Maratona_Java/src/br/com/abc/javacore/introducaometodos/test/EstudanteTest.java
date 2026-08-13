package br.com.abc.javacore.introducaometodos.test;

import br.com.abc.javacore.introducaometodos.classes.Estudante;

public class EstudanteTest {

    public static void main(String[] args) {

        Estudante estudante = new Estudante();
        estudante.setNome("João");
        estudante.setIdade(20);
        estudante.setNotas(new double[]{9.0, 9.0, 9.0});
        estudante.imprime();
        estudante.media();
        estudante.isSituacao();





    }

}
