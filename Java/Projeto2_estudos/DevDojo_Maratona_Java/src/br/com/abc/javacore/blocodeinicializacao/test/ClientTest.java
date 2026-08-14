package br.com.abc.javacore.blocodeinicializacao.test;

import br.com.abc.javacore.blocodeinicializacao.classes.Client;

public class ClientTest {

    static void main() {

        Client cliente = new Client();
        System.out.println("Exibindo quantidade de parcelas possiveis: ");
        for (int parcela : cliente.getParcelas()) {
            System.out.print(parcela + " ");
        }
    }
}
