package br.com.abc.javacore.classesabstratas.classes;

public class Gerente extends Funcionario{

    public Gerente() {
    }

    public Gerente(String nome, String clt, double salario) {
        super(nome, clt, salario);
    }

    @Override
    public void calculaSalario(){
        this.salario = salario + (salario * 0.2);
    }

    @Override
    public void imprime() {
        System.out.println("dento do metodo imprime - gerente");

    }

}
