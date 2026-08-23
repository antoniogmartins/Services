package br.com.abc.javacore.Kenum.test;
import br.com.abc.javacore.Kenum.classes.Cliente;
import br.com.abc.javacore.Kenum.classes.TipoCliente;


public class ClientTest {
    static void main() {
        Cliente cliente = new Cliente("Agm technologia", TipoCliente.PESSOA_FISICA, Cliente.TipoPagamento.AVISTA );
        Cliente cliente2 = new Cliente("Sonda", TipoCliente.PESSOA_JURIDICA, Cliente.TipoPagamento.APRAZO );
        System.out.println(cliente);
        System.out.println(cliente2);
        System.out.println(TipoCliente.PESSOA_FISICA.getId());
        System.out.println(TipoCliente.PESSOA_JURIDICA.getId());



    }
}
