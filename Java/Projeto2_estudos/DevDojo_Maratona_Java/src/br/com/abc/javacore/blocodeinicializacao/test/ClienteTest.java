package br.com.abc.javacore.blocodeinicializacao.test;

import br.com.abc.javacore.blocodeinicializacao.classes.Cliente;

public class ClienteTest {

    static void main() {

        Cliente cliente = new Cliente();
        System.out.println("Exibindo quantidade de parcelas possiveis: ");
        for (int parcela : cliente.getParcelas()) {
            System.out.print(parcela + " ");
        }
    }
}
