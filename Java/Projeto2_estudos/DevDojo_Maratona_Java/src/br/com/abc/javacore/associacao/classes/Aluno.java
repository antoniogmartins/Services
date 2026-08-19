package br.com.abc.javacore.associacao.classes;

public class Aluno {
    private String nome_aluno;
    private int idade;
    private Seminario seminario;


    public Aluno(String nome_aluno, int idade) {
        this.nome_aluno = nome_aluno;
        this.idade = idade;
    }

    public Aluno(){
    }

    public void print(){
        System.out.println("-------- Relatorio de Alunos ---------");
        System.out.println("Nome do Aluno: "+ this.nome_aluno);
        System.out.println("Idade do Aluno: "+ this.idade);
        if(this.seminario !=null) {
            System.out.println("Seminario inscrito: " + this.seminario.getTitulo());
        }else{
            System.out.println("Aluno não esta inscrito no Seminario");
        }

    }

    public String getNome_aluno() {
        return this.nome_aluno;
    }

    public void setNome_aluno(String nome_aluno) {
        this.nome_aluno = nome_aluno;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public Seminario getSeminario() {
        return seminario;
    }

    public void setSeminario(Seminario seminario) {
        this.seminario = seminario;
    }

}

