package br.com.abc.introducao.controledefLuxo;

public class ExercicioControleFluxo2 {

    static void main() {
       int num = 1;
       switch(num) {
           case 1:
           case 7:
               System.out.println("Domingo - dia não util");
               break;
           case 2:
           case 3:
           case 4:
           case 5:
           case 6:
               System.out.println("dia util");
               break;
           default:
               System.out.println("Número inválido");

       }
    }
}
