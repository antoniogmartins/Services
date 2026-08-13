package br.com.abc.introducao.controledefluxo;

public class ExercicioControleFluxo3 {

    static void main() {
       int valor = 100;
       for(int i=0; i<=valor; i++){
           if(i % 2 == 0){
               System.out.println("Número par: " + i);
           }
       }
    }
}
