package br.com.abc.javacore.introducaoclasses.test;

import br.com.abc.javacore.introducaoclasses.classes.Estudante;

public class EstudanteTest {
    public static void main(String[] args){
        Estudante estudante = new Estudante();
        estudante.setNome("João");
        estudante.setIdade(20);
        estudante.setNotas(new double[]{8.5, 7.0, 9.0});
        System.out.println("Nome: " + estudante.getNome());
        System.out.println("Idade: " + estudante.getIdade());
        System.out.println("Notas: " + java.util.Arrays.toString(estudante.getNotas()));
    }

}
