package br.com.abc.javacore.modificadorestatico.classes;

public class Carro {
    private String nome;
    private String modelo;
    private double velocidadeMaxima;
    public static double velocidadeLimite = 220 ;

    public Carro(String nome, String modelo, double velocidadeMaxima) {
        this.nome = nome;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;

    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getModelo() {
        return this.modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public double getVelocidadeMaxima() {
        return this.velocidadeMaxima;
    }

    public void setVelocidadeMaxima(double velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima;
    }


    public void validarvelocidade(){
        if (velocidadeLimite < this.velocidadeMaxima){
            System.out.println("A Velocidade Máxima de "+this.velocidadeMaxima+" Kms ultrapassou o limite de "+velocidadeLimite+" Kms");
        }else{
            System.out.println("A Velocidade está dentro dos limites estabelecidos");
        }
    }

    public void imprime() {
        System.out.println("----------------------------------------------------------------------");
        System.out.println("Nome: " + this.nome);
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Velocidade Máxima: " + this.velocidadeMaxima);
        System.out.println("Velocidade Limite: " + velocidadeLimite);
    }




}
