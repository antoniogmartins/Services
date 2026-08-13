package br.com.abc.javacore.introducaometodos.classes;

public class Estudante {
    private String nome;
    private int idade;
    private double[] notas;


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public double[] getNotas() {
        return notas;
    }

    public void setNotas(double[] notas) {
        this.notas = notas;
    }

    public void media() {
        if (this.notas == null || this.notas.length == 0) {
            System.out.println("Não é possível calcular a média, pois não há notas.");
            return;
        }else {
            double media = 0;
            for (double nota : notas) {
                media += nota;
            }
            media = media / notas.length;
            if (media >= 6) {
                System.out.println("A média é " + media + " - Situação: Aprovado");
            } else {
                System.out.println("A média é " + media + " - Situação: Reprovado");
            }
        }
    }

    public void imprime() {
        if (this.notas == null || this.notas.length == 0) {
            System.out.println("Nenhuma nota cadastrada.");
            return;
        } else {
            System.out.println("Nome: " + this.nome);
            System.out.println("Idade: " + this.idade);
            System.out.print("Notas: ");
            for (double nota : this.notas) {
                System.out.print(nota + " ");
            }
            System.out.println();
        }
    }

}
