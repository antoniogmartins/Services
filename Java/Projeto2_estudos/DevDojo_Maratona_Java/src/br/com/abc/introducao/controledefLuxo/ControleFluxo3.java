package br.com.abc.introducao.controledefLuxo;

public class ControleFluxo3 {

    static void main() {
        byte dia = 5;
        if(dia == 1){
          System.out.println("Domingo");
        }else if(dia == 2){
          System.out.println("Segunda-feira");
        }else if(dia == 3){
          System.out.println("Terça-feira");
        }else if(dia == 4){
          System.out.println("Quarta-feira");
        }else if(dia == 5){
          System.out.println("Quinta-feira");
        }else if(dia == 6){
          System.out.println("Sexta-feira");
        }else if(dia == 7){
          System.out.println("Sábado");
        }
        byte dia2 = 3;
        switch(dia2){
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda-feira");
                break;
            case 3:
                System.out.println("Terça-feira");
                break;
            case 4:
                System.out.println("Quarta-feira");
                break;
            case 5:
                System.out.println("Quinta-feira");
                break;
            case 6:
                System.out.println("Sexta-feira");
                break;
            case 7:
                System.out.println("Sábado");
                break;
            default:
                System.out.println("Dia inválido");
        }

        char sexo = 'f';
        switch(sexo){
            case 'M','m':
                System.out.println("Masculino");
                break;
            case 'F','f':
                System.out.println("Feminino");
                if(sexo == 'F' || sexo == 'f'){
                    System.out.println("Sexo feminino");
                }
                break;
            default:
                System.out.println("Sexo inválido");
        }
    }
}
