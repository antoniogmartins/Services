import java.security.SecureRandom;
public class Aula08 {

    public static void main(String[] args) {

        final int linhas = 3;
        final int colunas = 5;

        int[][] numeros = new int[linhas][colunas];
        int[][] num = {{10,20,30,40,50},{60,70,80,90,100},{110,120,130,140,150}};

        System.out.println("Exibição de Array 01");
        for (int l = 0; l < linhas; l++){
            for (int c = 0; c < colunas; c++){
                numeros[l][c] = new SecureRandom().nextInt(10);
                System.out.println("numeros[" + l + "][" + c + "]: " + numeros[l][c]);
            }
        System.out.println("Linha " + l + ": " + java.util.Arrays.toString(numeros[l]));

        }
        System.out.println("Exibição de Array 02.1");
        for(int[] n:numeros) {
            for (int v : n) {
                System.out.println(java.util.Arrays.toString(n));
            }
            System.out.println(java.util.Arrays.toString(n));
        }
        System.out.println("Exibição de Array 02.2");
        for (int[] arr : num) {
            for (int v : arr) {
                System.out.printf("%2d | ", v);
            }
            System.out.println(java.util.Arrays.toString(arr));
        }











    }
}
