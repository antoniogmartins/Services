package br.com.abc.javacore.heranca.classes;

public class Funcionario extends Pessoa{
    private double salario;

    public Funcionario(String nome){
        super(nome);
        System.out.println("Dentro do Construtor de Funcionario");
    }
    static {
        System.out.println("Bloco de inicialização estatico de Funcionario 1");
    }
    {
        System.out.println("Bloco de inicialização - Funcionario 1");
    }
    {
        System.out.println("Bloco de inicialização - Funcionario 2");
    }
    public double getSalario() {
        return this.salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public void imprimeRebibodePagamento(){
        System.out.println("Eu " + super.nome + " recebi o pagamento de R$ " + this.salario);
    }

    public void imprimeFuncionario(){
        super.imprimePessoa();
        System.out.println("Salario: "+ this.salario);
        System.out.println("---------------------------------------");
        imprimeRebibodePagamento();
    }





}
