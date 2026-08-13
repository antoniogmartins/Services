package introducao.arrays;

public class Arrays1 {

    static void main() {

        int[] arr = {1, 2, 3, 4, 5, 7};
        System.out.println(arr.length);
        System.out.println(arr.getClass().getSimpleName());
        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
        System.out.println(arr[3]);
        System.out.println(arr[4]);
        System.out.println("====== Imprimindo no 1.for o array ======");
        for (int num: arr){
            System.out.println(num);
        }
        System.out.println("====== Imprimindo no 2.for o array ======");
        for (int i=0; i<arr.length; i++){
            System.out.println(arr[i]);
        }



    }
}
