package br.com.abc.javacore.sobrescrita.test;

import br.com.abc.javacore.sobrescrita.classes.Pessoa;

public class PessoaTest {
    static void main() {
        Pessoa pessoa1 = new Pessoa();
        pessoa1.setNome("Joaquina na esquina");
        pessoa1.setIdade(300);
        System.out.println(pessoa1);
        Pessoa pessoa2 = new Pessoa();
        pessoa2.setNome("Maria Joaquina");
        pessoa2.setIdade(10);
        System.out.println(pessoa2);
    }



}
