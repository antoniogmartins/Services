package br.com.abc.javacore.associacao.classes;

public class Professor {
    private String nome_professor;
    private String especialidade;
    private Seminario[] seminarios;

    public Professor(String nome_professor, String especialidade) {
        this.nome_professor = nome_professor;
        this.especialidade = especialidade;
    }

    public Professor() {
    }

    public void print(){
        System.out.println("-------- Relatorio de Professores ----------");
        System.out.println("Nome professor: " + this.nome_professor);
        System.out.println("Especialidade: " + this.especialidade);
        if(seminarios !=null && seminarios.length !=0){
            System.out.println("Seminarios participantes:");
            for (Seminario seminario : seminarios) {
                System.out.println("Seminario: " + seminario.getTitulo());
            }
            return;
        }
        System.out.println("Professor nao vinculado a nenhum seminario");
    }

    public String getNome() {
        return this.nome_professor;
    }

    public void setNome(String nome_professor) {
        this.nome_professor = nome_professor;
    }

    public String getEspecialidade() {
        return this.especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public Seminario[] getSeminario() {
        return seminarios;
    }

    public void setSeminario(Seminario[] seminario) {
        this.seminarios = seminario;
    }


}
