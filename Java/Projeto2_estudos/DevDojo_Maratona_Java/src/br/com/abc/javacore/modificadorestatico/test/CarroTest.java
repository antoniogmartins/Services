package br.com.abc.javacore.modificadorestatico.test;

import br.com.abc.javacore.modificadorestatico.classes.Carro;

public class CarroTest {

    static void main() {
       // Carro.velocidadeLimite = 220;
        Carro.setVelocidadeLimite(220);

        Carro c1 = new Carro("Carro 1", "Fiat uno", 300.00);
        c1.imprime();
        c1.validarvelocidade();


        Carro c2 = new Carro("Carro 2", "Opala", 200.00);
        c2.imprime();
        c2.validarvelocidade();
    }

}
