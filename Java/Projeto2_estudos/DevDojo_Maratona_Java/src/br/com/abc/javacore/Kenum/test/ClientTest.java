package br.com.abc.javacore.Kenum.test;
import br.com.abc.javacore.Kenum.classes.Cliente;
import br.com.abc.javacore.Kenum.classes.TipoCliente;

public class ClientTest {
    static void main() {
        Cliente cliente = new Cliente("Agm technologia", TipoCliente.PESSOA_FISICA );
        Cliente cliente2 = new Cliente("Sonda", TipoCliente.PESSOA_JURIDICA );
        System.out.println(cliente);
        System.out.println(cliente2);



    }
}
