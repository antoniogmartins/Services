package br.com.abc.javacore.associacao.classes;

import java.sql.SQLOutput;

public class Seminario {
    private String titulo;
    private Aluno[] alunos;
    private Professor professor;
    private Local local;

    public Seminario(String titulo) {
        this.titulo = titulo;
    }

    public Seminario(){

    }

    public void print(){
        System.out.println("-------- Relatorio de Seminarios ----------");
        System.out.println("Nome do Seminario: "+ this.titulo);
      //  System.out.println("Professor Palestrante: "+ this.professor.getNome());
        if(this.professor != null) {
            System.out.println("Professor Palestrante: " + this.professor.getNome());
        }else{
            System.out.println("Nenhum professor cadastrado para este seminario");
        }

        if(this.local != null) {
            System.out.println("Local do Seminario: " + this.local.getRua() + " Bairro: " + this.local.getBairro());
        }else{
                System.out.println("Nenhum local cadastrado prar este seminario");
        }
        if (this.alunos != null && this.alunos.length != 0) {
            System.out.println("Alunos Participantes: ");
            for (Aluno aluno : alunos) {
                System.out.println("Aluno: " + aluno.getNome_aluno());
            }
            return;
        }
        System.out.println("Nenhum aluno cadastrado");

    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Aluno[] getAlunos() {
        return alunos;
    }

    public void setAlunos(Aluno[] alunos) {
        this.alunos = alunos;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }
    public Local getLocal() {
        return local;
    }

    public void setLocal(Local local) {
        this.local = local;
    }

}
