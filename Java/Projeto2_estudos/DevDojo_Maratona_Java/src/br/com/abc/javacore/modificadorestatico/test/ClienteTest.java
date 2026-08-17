package br.com.abc.javacore.modificadorestatico.test;
import br.com.abc.javacore.modificadorestatico.classes.Cliente;

public class ClienteTest {

    static void main() {

        Cliente c1 = new Cliente();
        Cliente c2 = new Cliente();
        Cliente c3 = new Cliente();
/*
        System.out.println("Exibindo quantidade de parcelas possiveis: ");
        for (int parcela : Cliente.getParcelas()) {
            System.out.print(parcela + " ");
        }
*/
        System.out.println("tamanho: "+Cliente.getParcelas().length);
     //   System.out.println("tamanho: "+Cliente.getParcelas().length);
     //   System.out.println("tamanho: "+Cliente.getParcelas().length);

    }
}
