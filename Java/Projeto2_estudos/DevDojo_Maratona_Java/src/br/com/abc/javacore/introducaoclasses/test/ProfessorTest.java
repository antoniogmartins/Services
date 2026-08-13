package br.com.abc.javacore.introducaoclasses.test;

import br.com.abc.javacore.introducaoclasses.classes.Professor;

public class ProfessorTest {
    public static void main(String[] args) {

        Professor prof1 = new Professor();
        prof1.setNome("João");
        prof1.setMatricula("123456");
        prof1.setRg("123456789");
        prof1.setCpf("12345678900");

        Professor prof2 = new Professor();
        prof2.setNome("Maria");
        prof2.setMatricula("654321");
        prof2.setRg("987654321");
        prof2.setCpf("00000000000");

        System.out.println("Nome: " + prof1.getNome());
        System.out.println("Matrícula: " + prof1.getMatricula());
        System.out.println("RG: " + prof1.getRg());
        System.out.println("CPF: " + prof1.getCpf());

        System.out.println("-----------------------------");

        System.out.println("Nome: " + prof2.getNome());
        System.out.println("Matrícula: " + prof2.getMatricula());
        System.out.println("RG: " + prof2.getRg());
        System.out.println("CPF: " + prof2.getCpf());

        System.out.println("-----------------------------");

        prof2=prof1;
        System.out.println("Nome: " + prof2.getNome());
        System.out.println("Matrícula: " + prof2.getMatricula());
        System.out.println("RG: " + prof2.getRg());
        System.out.println("CPF: " + prof2.getCpf());

    }

}
