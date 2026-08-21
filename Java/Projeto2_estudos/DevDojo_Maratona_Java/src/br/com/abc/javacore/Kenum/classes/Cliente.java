package br.com.abc.javacore.Kenum.classes;

public class Cliente {

   private String nome;
   private TipoCliente tipo;

    public Cliente(String nome, TipoCliente tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "nome='" + nome + '\'' +
                ", tipo=" + tipo +
                '}';
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public TipoCliente getTipo() {
        return this.tipo;
    }

    public void setTipo(TipoCliente tipo) {
        this.tipo = tipo;
    }






}
