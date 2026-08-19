package br.com.abc.javacore.associacao.test;

import br.com.abc.javacore.associacao.classes.Aluno;
import br.com.abc.javacore.associacao.classes.Local;
import br.com.abc.javacore.associacao.classes.Professor;
import br.com.abc.javacore.associacao.classes.Seminario;

public class AssociacaoTest {
    static void main() {
        Aluno aluno = new Aluno("William Suane", 54);
        Aluno aluno2 = new Aluno("Marly Fonseca", 34);
        Seminario sem = new Seminario("Como ser um baita programador e ficar rico?");
        Professor professor = new Professor("Yoda","Usar a força para programar");
        Local local = new Local("Rua", "Matto");

        aluno.setSeminario(sem);
        aluno2.setSeminario(sem);

        sem.setProfessor(professor);
        sem.setLocal(local);
        sem.setAlunos(new Aluno[]{aluno,aluno2});

        Seminario[] semArray = new Seminario[1];
        semArray[0] = sem;
        professor.setSeminario(semArray);

        aluno.print();
        sem.print();
        professor.print();







    }

}
