package br.com.abc.javacore.heranca.classes;

public class Pessoa extends Object{
    protected String nome;
    protected String cpf;
    protected Endereco endereco;

    public Pessoa(String nome){
        System.out.println("Dentro do Construtor de Pessoa");
        this.nome = nome;
    }
    static {
        System.out.println("Bloco de inicializaçao estatico de Pessoa");
    }
    {
        System.out.println("Bloco de inicialização - Pessoa 1");
    }
    {
        System.out.println("Bloco de inicialização - Pessoa 2");
    }
    public Pessoa(String nome, String cpf){
        //this.nome = nome;
        //ou
        this(nome);
        this.cpf = cpf;
    }
    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Endereco getEndereco() {
        return this.endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public String imprimePessoa(){
        System.out.println("Nome: "+ this.nome);
        System.out.println("Cpf: "+ this.cpf);
        System.out.println("Rua: "+ this.endereco.getRua() + "Bairro: "+ this.endereco.getBairro());
        return this.nome;
    }


}
