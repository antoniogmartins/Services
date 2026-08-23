package br.com.abc.javacore.Kenum.classes;

public class Cliente {
   public enum TipoPagamento{
       AVISTA(1, "A Vista"), APRAZO (2, "A Prazo");

       private int tipo;
       private String nome;

       TipoPagamento(int tipo, String nome) {

           this.tipo = tipo;
           this.nome = nome;
       }

       public int getTipo() {
           return this.tipo;
       }

       public String getNome() {
           return this.nome;
       }

   }

    private String nome;
    private TipoCliente tipocliente;
    private TipoPagamento tiṕopagamento;

    public Cliente(String nome, TipoCliente tipocliente,TipoPagamento tipopagamento) {
        this.nome = nome;
        this.tipocliente = tipocliente;
        this.tiṕopagamento = tipopagamento;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "nome='" + nome + '\'' +
                ", tipocliente=" + tipocliente.getNome() +
                ", tiṕopagamento=" + tiṕopagamento.getNome() +
                ", numero="+ tipocliente.getTipo() +
                '}';
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public TipoCliente getTipoCliente() {
        return this.tipocliente;
    }

    public void setTipoCliente(TipoCliente tipocliente) {
        this.tipocliente = tipocliente;
    }

    public TipoPagamento getTiṕopagamento() {
        return tiṕopagamento;
    }

    public void setTiṕopagamento(TipoPagamento tiṕopagamento) {
        this.tiṕopagamento = tiṕopagamento;
    }




}
