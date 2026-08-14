package br.com.abc.javacore.sobrecarga.metodos.classes;

public class Funcionario {
    private String nome;
    private int idade;
    private String cpf;
    private double salario;
    private String rg;

    public Funcionario(String nome, int idade, String cpf, String rg, double salario) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.rg = rg;
        this.salario = salario;
     //   System.out.println ("Dentro do construtor");
    }
    public Funcionario(){

    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getCpf() {
        return this.cpf;
    }

    public String getRg() {return this.rg;}

    public void setRg(String rg) {this.rg = rg;}

    public double getSalario() {
        return this.salario;
    }

    public void setSalario(double salario) {this.salario = salario;}

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    /*
    public void init(String nome, int idade, String cpf, double salario){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.salario = salario;
    }
    //sobrecarga de metodos, mesmo nome, mas com parametros diferentes
    public void init(String nome, int idade, String cpf, String rg, double salario) {
        init(nome, idade, cpf, salario);
        this.rg = rg;
    }
    */

    public void imprime()
    {
        System.out.println("Nome: " + this.nome);
        System.out.println("Idade: " + this.idade);
        System.out.println("CPF: " + this.cpf);
        System.out.println("RG: " + this.rg);
        System.out.println("Salario: " + this.salario);
    }

}
