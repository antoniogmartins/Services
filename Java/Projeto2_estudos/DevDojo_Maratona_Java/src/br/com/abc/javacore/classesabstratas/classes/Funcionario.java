package br.com.abc.javacore.classesabstratas.classes;

public abstract class Funcionario extends Pessoa{

    protected String clt;
    protected double salario;

    public Funcionario(String nome, String clt, double salario) {
        this.nome = nome;
        this.clt = clt;
        this.salario = salario;
    }

    public Funcionario(){

    }

    public abstract void calculaSalario();
       // this.salario = salario + (salario * 0.1);


    @Override
    public String toString() {
        return "Funcionario{" +
                "nome = '" + nome + '\'' +
                ", clt = '" + clt + '\'' +
                ", salario = '" + salario + '\'' +
                '}';
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getClt() {
        return this.clt;
    }

    public void setClt(String clt) {
        this.clt = clt;
    }

    public double getSalario() {
        return this.salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }







}
