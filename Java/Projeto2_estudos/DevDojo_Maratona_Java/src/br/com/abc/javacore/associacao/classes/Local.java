package br.com.abc.javacore.associacao.classes;

public class Local {
    private String Rua;
    private String Bairro;

    public Local(String rua, String bairro) {
        Rua = rua;
        Bairro = bairro;
    }

    public Local(){
    }

    public void print(){
        System.out.println("---------Relatorio da Localização");
        System.out.println("Rua :" + this.Rua);
        System.out.println("Bairro :" + this.Bairro);
    }

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




}
