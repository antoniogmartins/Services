package introducao.arrays;

public class Arrays6 {

    static void main() {

        int[] arrInt = {1,2,3};
        int[] arrInt2 = new int[3];
        int[] arrInt3 = new int[]{1,2,3};

   //     int[][] dias = new int[2][2];
   //     dias[0][0] = 100;
   //     dias[0][1] = 101;
   //     dias[1][0] = 102;
   //     dias[1][1] = 103;
      //  System.out.println(dias[0][0]);
   //     dias[0] = new int[2];
   //     dias[1] = new int[]{4,5,6};

        int[][] dias = {{0,0}, {1,2,3}, {0,0,0,0}};

        for(int[] arr: dias){
            for(int dia: arr){
                System.out.println(dia);
            }
         }

        for (int i = 0; i < dias.length; i++) {
            for (int j = 0; j < dias[i].length; j++) {
                System.out.print(dias[i][j] + " ");
            }
            System.out.println();
        }

      //  System.out.println(dias[0].length);
      //  System.out.println(dias[1][2]);

    }
}
