package br.com.abc.javacore.interfaces.classes;

public class Produto implements Tributavel, Transportavel{

    private String nome;
    private double peso;

    @Override
    public String toString() {
        return "Produto{" +
                "nome='" + nome + '\'' +
                ", peso=" + peso +
                ", preco=" + preco +
                ", valorFrete=" + valorFrete +
                ", preco Final com imposto=" + precoFinal +
                '}';
    }

    private double preco;
    private double valorFrete;
    private double precoFinal;

    public Produto(String nome, double peso, double preco) {
        this.nome = nome;
        this.peso = peso;
        this.preco = preco;
    }




    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    @Override
    public void calculaImposto() {
        precoFinal = this.preco + (this.preco + IMPOSTO);
    }

    @Override
    public void calcularFrete() {
        this.valorFrete = this.preco / peso * 0.1;
    }
}
