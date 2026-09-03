package Utils;
import  Utils.criarprodutosDinamico;

public class geracorpoprodutoDinamico {

    public static String gerarProduto() {

        criarprodutosDinamico produto = criarprodutosDinamico.gerarProduto();

        return "{\n" + " \"nome\": \"" + produto.nome + "\",\n" +
                " \"preco\": " + produto.preco + ",\n" +
                " \"descricao\": \"" + produto.descricao + "\",\n" +
                " \"quantidade\": " + produto.quantidade + "\n" + "}";
    }
}