import java.util.Scanner;

public class Aula05 {

      public static void main(String[] args){
          int cont = 0;
          Scanner scan = new Scanner(System.in);

          /* mesma coisa
          cont = cont + 1;
          cont +=1;
          cont ++;

          /*FOR
          for(int cont=0; cont<=4; cont++){
              System.out.println(cont+" : CfBCursos");
          }
          /* WHILE
          System.out.println ("Digite um valor");
          int quant = scan.nextInt();

          while (cont < quant){
             System.out.println(cont+" : CfBCursos");
             cont++;
         }
         System.out.println("Fim do programa");

         /DO WHILE
         */
         do {
             System.out.println(cont + " -CFB Cursos");
             cont++;
         } while(cont <= 3);






      }
}
