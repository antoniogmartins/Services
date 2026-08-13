package br.com.abc.introducao.controledefluxo;

public class ControleFluxo4 {

    static void main() {
        int contador = 0;
        while (contador <= 10) {
            System.out.println("utilizando while: " + contador);
            contador++;
        }
        contador = 0;
        do {
            System.out.println("utilizando o do while: " + contador);
            contador++;
        } while (contador <= 10);

        for (int i = 0; i <= 10; i++) {
            System.out.println("utilizando o for: " + i);
            if (i == 5){break;}

        }
    }
}