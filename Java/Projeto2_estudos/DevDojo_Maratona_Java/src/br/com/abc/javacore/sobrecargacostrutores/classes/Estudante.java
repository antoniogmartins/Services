package br.com.abc.javacore.sobrecargacostrutores.classes;

public class Estudante {
    private String nome;
    private int idade;
    private int matricula;
    private double[] notas;
    private String dataMatricula;

    public Estudante(int matricula, String nome, int idade, double[] notas) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.notas = notas;
    }
    public Estudante(int matricula, String nome, int idade, String dataMatricula, double[] notas) {
        this(matricula,nome,idade,notas);
        this.dataMatricula = dataMatricula;
    }

    public Estudante(){
       System.out.println("Construtor Default");
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return this.idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getMatricula() {
        return this.matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public double[] getNotas() {
        return this.notas;
    }

    public void setNotas(double[] notas) {
        this.notas = notas;
    }

    public String getDataMatricula() {
        return this.dataMatricula;
    }

    public void setDataMatricula(String dataMatricula) {
        this.dataMatricula = dataMatricula;
    }


    public void imprime(){

        System.out.println("Nome: " + this.nome);
        System.out.println("Idade: " + this.idade);
        System.out.println("Matrícula: " + this.matricula);
        System.out.print("Notas: ");
        if (this.notas != null) {
            for (double nota : this.notas) {
                System.out.print(nota + " ");
            }
        } else {
            System.out.print("Nenhuma nota cadastrada.");
        }
        System.out.println();
    }


}
