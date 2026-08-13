package br.com.abc.javacore.introducaometodos.test;

import br.com.abc.javacore.introducaometodos.classes.Professor;

public class ProfessorTest {

    public static void main(String[] args) {

        Professor prof1 = new Professor();
        prof1.setNome("João");
        prof1.setMatricula("12345");
        prof1.setRg("123456789");
        prof1.setCpf("123.456.789-00");

        prof1.imprime(prof1);
        System.out.println("================");

        Professor prof2 = new Professor();
        prof2.setNome("Maria");
        prof2.setMatricula("54321");
        prof2.setRg("987654321");
        prof2.setCpf("999.456.789-00");
        prof2.imprime(prof2);
        prof2.setNome("Marly");
        prof2.imprime(prof2);
        System.out.println("================");

        Professor prof3 = new Professor();
        prof3.setNome("Josefina");
        prof3.setMatricula("99999");
        prof3.setRg("888888888888");
        prof3.setCpf("777.7777.777-00");
        prof3.imprime2();// Test code for Professor class can be added here
        System.out.println("================");

    }
}
