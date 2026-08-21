package br.com.abc.javacore.modificadorfinal.classes;

public class Carro {
    public static final double VELOCIDADE_FINAL = 250;
    public final Comprador comprador = new Comprador();
    private String nome;
    private String marca;

    @Override
    public String toString() {
        return "Carro{" +
                "nome='" + nome + '\'' +
                ", marca='" + marca + '\'' +
                '}';
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Comprador getComprador() {
        return comprador;
    }
    public final void imprime(){
        System.out.println("Marca: "+ this.getMarca()+" Nome: "+this.getNome() );
    }

}
