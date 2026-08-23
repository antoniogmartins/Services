package br.com.abc.javacore.Kenum.classes;

public enum TipoCliente {

    //Precisam ser a primeira linha da inicialização
    PESSOA_FISICA(1, "Pessoa Fisica"),
    PESSOA_JURIDICA(2, "Pessoa Juridica"){
          public String getId() {
            return "B";
        }
    };
    private int tipo;
    private String nome;
    public String getId() {
        return "A";
    }

    TipoCliente(int _tipo, String _nome){
        this.tipo = _tipo;
        this.nome = _nome;
    }

    public int getTipo() {
        return this.tipo;
    }

    public String getNome() {
        return this.nome;
    }

}
