package Utils;

import com.github.javafaker.Faker;
public class criarprodutosDinamico {

    static String nome;
    static int preco;
    static String descricao;
    static int quantidade;

    private static final Faker faker = new Faker();

    public static criarprodutosDinamico gerarProduto() {

        nome = faker.commerce().productName();

        preco = faker.number().numberBetween(10, 1000);

        descricao = faker.lorem().sentence();

        quantidade = faker.number().numberBetween(1, 100);

        criarprodutosDinamico produto = new criarprodutosDinamico();
        produto.nome = nome;
        produto.preco = preco;
        produto.descricao = descricao;
        produto.quantidade = quantidade;

        return produto;

    }

}

