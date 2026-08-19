package br.com.abc.javacore.heranca.test;

import br.com.abc.javacore.heranca.classes.Endereco;
import br.com.abc.javacore.heranca.classes.Funcionario;
import br.com.abc.javacore.heranca.classes.Pessoa;

public class HerancaTest {

    static void main() {
//        Pessoa p = new Pessoa("Antonio");
        Endereco e = new Endereco();

//        p.setNome("Cina");
//        p.setCpf("0110298883");
//        e.setRua("xpto, nr 101 ");
//        e.setBairro("Bairro 1");
//        p.setEndereco(e);
//        p.imprimePessoa();
//        System.out.println("--------------------------------");

        Funcionario f = new Funcionario("Maria");
        f.setNome("Antonio");
        f.setCpf("9875654321");
        f.setSalario(15000);
        e.setRua("xpto2, nr 101 ");
        e.setBairro("Bairro do xpto 2");
        f.setEndereco(e);
      //  f.imprimePessoa();
      //  System.out.println("--------------------------------");
      //  f.imprimeFuncionario();
      //  e.imprimeendereco();




    }
}
