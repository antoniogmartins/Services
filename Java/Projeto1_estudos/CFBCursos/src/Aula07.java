import java.util.*;

public class Aula07 {

    public static void main(String[] args){
        System.out.println ("Exibição de Array 01");

        final int tam=10;
        int[] num_1 = {1,2,3,4,5};
        System.out.println("todo o Array:" + Arrays.toString(num_1));
        System.out.println("Array de ind 0: " + num_1[0]);
        System.out.println("Array de ind 1: " + num_1[1]);
        System.out.println("Array de ind 2: " + num_1[2]);
        System.out.println("Array de ind 3: " + num_1[3]);
        System.out.println("Array de ind 4: " + num_1[4]);

        System.out.println("================================================");
        System.out.println ("Exibição de Array 02");

        int[] num_2 = {6,7,8,9,10};
        for(int i=0; i<num_2.length; i++){
            System.out.println("Array de indice " + i + ": " + num_2[i]);
        }

        System.out.println("================================================");
        System.out.println ("Exibição de Array 03.01");

        int[] num_3 = {15,14,13,12,11,0,21,8,9,55,18};
        Arrays.sort(num_3);
        int i = 0;
        for (int n : num_3) {
                System.out.println("Array de indice " + i + ": " + n);
                i +=1;
        }
        System.out.println ("Exibição de Array 03.02");
        int[] numeros = new int[tam];
        int p = 5;
        System.arraycopy(num_3,0,numeros,0,tam);

        for (int num_4 : numeros) {
            System.out.println("Array de indice " +num_4);
        }

        System.out.println("Os Arrays são iguais ? "
                + (Arrays.equals(num_3, numeros) ? "Sim, são iguais" : "Não"));

        System.out.printf("O Elemento %d esta no array? %s",
                p,
                Arrays.binarySearch(numeros,p) >=0 ? "Sim" : "Não, não esta no array");
        System.out.printf("\n");

        int pos;
        pos = Arrays.binarySearch(num_1,p);
        System.out.printf("O Elemento %d esta no array? %s na posicao %d",
                p,
                pos >=0 ? "Sim" : "Não, não esta no array",
                pos);

    }
}
