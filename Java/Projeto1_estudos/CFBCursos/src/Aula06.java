import java.util.Arrays;
//import java.util.Assert.*;

public class Aula06 {


    public static void main (String[] args) {

        final int tam = 5;//constante

        int[] num = new int[5];
        num[0] = 1;
        num[1] = 2;
        num[2] = 3;
        num[3] = 4;
        num[4] = 5;
        System.out.println(num[0] = 3);
        System.out.println(num[1]);
        System.out.println(num[2]);
        System.out.println(num[3]);
        System.out.println(num[4]);

        System.out.println(Arrays.toString(num));


        int[] numeros = {10, 20, 30, 40, 50};
        System.out.println(Arrays.toString(numeros));
        System.out.println(numeros[3]);

        for (int i = 0; i < tam; i++) {
            System.out.println("numeros[" + i + "]: " + numeros[i]);
        }

        char[] garabito = {'a', 'b', 'c', 'd', 'e'};
        char[] respostas = new char[tam];
        respostas[0]='a';respostas[1]='b';respostas[2]='c';
        respostas[3]='d';respostas[4]='e';

        int nota = 0;

        System.out.println("Respostas do aluno: " + Arrays.toString(garabito));
        System.out.println("Respostas do aluno: " + garabito[0] + ", " + garabito[1] + ", " + garabito[2] + ", " + garabito[3] + ", " + garabito[4]);
        System.out.println("Respostas do aluno: " + Arrays.toString(respostas));
        System.out.println("Respostas do aluno: " + respostas[0]);

         if (Arrays.equals(garabito, respostas)) {
            nota = 10;
        } else {
            for (int i = 0; i < tam; i++) {
                if (garabito[i] == respostas[i]) {
                    nota += 2;
                }
            }
        }
         System.out.println("nota do aluno: " + nota);

    }
}
