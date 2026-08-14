package br.com.abc.javacore.sobrecargametodos.test;

import br.com.abc.javacore.sobrecargametodos.classes.Funcionario;

public class FuncionarioTest {

    public static void main(String[] args) {


          Funcionario funcionario = new Funcionario("João", 54, "123.456.789-00", "123456789", 20000.02);
          funcionario.imprime();
          System.out.println("---------------------------------------------------");
          Funcionario funcionario2 = new Funcionario(); // aqui vira tudo em branco
//          funcionario2.init("João", 54,"123.456.789-00","123456789", 20000.02);
          funcionario2.imprime();

    }
}
