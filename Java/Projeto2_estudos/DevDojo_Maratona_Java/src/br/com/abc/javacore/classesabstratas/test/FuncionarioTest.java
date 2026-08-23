package br.com.abc.javacore.classesabstratas.test;

import br.com.abc.javacore.classesabstratas.classes.Funcionario;
import br.com.abc.javacore.classesabstratas.classes.Gerente;
import br.com.abc.javacore.classesabstratas.classes.Vendedor;

public class FuncionarioTest {

    public static void main(String[] args) {
        //  Funcionario funcionario = new Funcionario(); => pois é uma classe abstrata
        //  funcionario.calculaSalario();
        Gerente gerente = new Gerente("Antonio","3333-01",5000);
        gerente.calculaSalario();
        Vendedor vendedor = new Vendedor("Marly", "4444-02", 5000, 1500);
        vendedor.calculaSalario();
        //  System.out.println(funcionario);
        System.out.println(gerente);
        System.out.println(vendedor);
        gerente.imprime();
        vendedor.imprime();
    }
}
