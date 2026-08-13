package br.com.abc.javacore.introducaoclasses.classes;

public class Carro {
    public String placa;
    public String modelo;
    public char tipoCombustivel;
    public float velocidadeMaxima;

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public char getTipoCombustivel() {
        return tipoCombustivel;
    }

    public void setTipoCombustivel(char tipoCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
    }

    public float getVelocidadeMaxima() {
        return velocidadeMaxima;
    }

    public void setVelocidadeMaxima(float velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima;
    }

}
