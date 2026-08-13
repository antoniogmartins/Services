package br.com.abc.javacore.introducaometodos.classes;

public class Professor {

    private String nome;
    private String matricula;
    private String rg;
    private String cpf;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void imprime(Professor prof) {
        System.out.println(prof.getNome());
        System.out.println(prof.getMatricula());
        System.out.println(prof.getRg());
        System.out.println(prof.getCpf());
        prof.nome = "Outro nome";
        System.out.println(prof.nome);
    }

    public void imprime2() {
        System.out.println(this.getNome());
        System.out.println(this.getMatricula());
        System.out.println(this.getRg());
        System.out.println(this.getCpf());
        }



}
