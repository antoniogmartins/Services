package br.com.abc.introducao.controledefluxo;

public class ExercicioControleFluxo4 {

    static void main() {
        double valorototalcarro = 5000.00;
       // int quantidadeparcelas = 0;

        for(int parcela = 1; parcela <= valorototalcarro; parcela++){
            double valorparcela = valorototalcarro / parcela;
            if(valorparcela < 1000){
                continue;
            }else {
                System.out.println("Parcela: " + parcela + " - " + "Valor da parcela: " + valorparcela);
            }


        }
    }
}
