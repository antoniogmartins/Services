package br.com.abc.introducao.arrays;

public class Arrays5 {

    static void main() {

        int[][] dias = new int[2][2];
        dias[0][0] = 100;
        dias[0][1] = 101;
        dias[1][0] = 102;
        dias[1][1] = 103;

        for (int i = 0; i < dias.length; i++) {
            for (int j = 0; j < dias[i].length; j++) {
                //System.out.println(dias[i].length);
                System.out.println("Dia: " + i + j + " - " + dias[i][j]);
            }
        }
        int cont = 0;
        for (int[] ref: dias){
            for(int dia: ref){
                cont = cont + 1;
                System.out.println("Dia: " + cont + " valor: " + dia);
            }
        }
    }
}
