package br.com.abc.javacore.modificadorfinal.tests;

import br.com.abc.javacore.modificadorfinal.classes.Carro;

public class CarroTest {
    static void main() {
        Carro carro = new Carro();
        System.out.println(carro.getComprador());
        carro.getComprador().setNome("Kuririm");
        System.out.println(carro.getComprador());
        carro.setMarca("MARCA 1");
        carro.setNome("Opala");
        carro.imprime();
    }

    
}
