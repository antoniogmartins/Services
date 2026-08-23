package br.com.abc.javacore.interfaces.test;

import br.com.abc.javacore.interfaces.classes.Produto;

public class ProdutoTest {

    public static void main(String[] args) {
        Produto produto = new Produto("Notebook", 4, 2000);
        produto.calculaImposto();
        produto.calcularFrete();
        System.out.println(produto);

    }

}
