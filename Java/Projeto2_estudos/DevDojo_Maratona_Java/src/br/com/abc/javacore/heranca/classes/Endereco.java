package br.com.abc.javacore.heranca.classes;

public class Endereco {
    private String Rua;
    private String Bairro;

    public String getRua() {
        return this.Rua;
    }

    public void setRua(String rua) {
        this.Rua = rua;
    }

    public String getBairro() {
        return this.Bairro;
    }

    public void setBairro(String bairro) {
        this.Bairro = bairro;
    }

    /*
    public void imprimeendereco(){
        System.out.println("Rua"+this.Rua);
        Pessoa p = new Pessoa("Jose");
        System.out.println("Nome: "+p.nome);
    }
    */
}
