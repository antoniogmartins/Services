package br.com.abc.javacore.classesabstratas.classes;

public class Vendedor extends Funcionario{

    private double totalVendas;

    public Vendedor(double totalVendas) {
        this.totalVendas = totalVendas;
    }

    public Vendedor(String nome, String clt, double salario, double totalVendas) {
        super(nome, clt, salario);
        this.totalVendas = totalVendas;
    }

    @Override
    public void calculaSalario() {
        this.salario = salario + (totalVendas * 0.5);
    }

    public double getTotalVendas() {
        return totalVendas;
    }

    public void setTotalVendas(double totalVendas) {
        this.totalVendas = totalVendas;
    }


    @Override
    public String toString() {
        return "Funcionario{" +
                "nome ='" + nome + '\'' +
                ", clt ='" + clt + '\'' +
                ", salario = '" + salario + '\'' +
                ", total_vendas = '" + totalVendas + '\'' +
                '}';
    }

    @Override
    public void imprime() {
        System.out.println("dento do metodo imprime - vendedor");

    }


}
