package br.com.abc.introducao.javacore.test;

import br.com.abc.introducao.javacore.classes.Carro;

public class CarroTest {

    public static void main(String[] args) {
        Carro carro = new Carro();
        carro.setModelo("Fusca");
        carro.setPlaca("ABC-1234");
        carro.setTipoCombustivel('A');
        carro.setVelocidadeMaxima(120.0f);

        System.out.println("Modelo: " + carro.getModelo());
        System.out.println("Placa: " + carro.getPlaca());
        System.out.println("Tipo de Combustível: " + carro.getTipoCombustivel());
        System.out.println("Velocidade Máxima: " + carro.getVelocidadeMaxima());

    }
}
