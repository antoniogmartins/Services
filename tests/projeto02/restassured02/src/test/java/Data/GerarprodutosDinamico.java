package Data;

import Utils.CriarprodutosDinamico;
import com.github.javafaker.Faker;

public class GerarprodutosDinamico {

    private static final Faker faker = new Faker();

    public static CriarprodutosDinamico gerarProduto() {

        CriarprodutosDinamico produto = new CriarprodutosDinamico();

        produto.setNome(faker.commerce().productName());

        produto.setPreco(faker.number().numberBetween(10, 1000));

        produto.setDescricao(faker.lorem().sentence());

        produto.setQuantidade(faker.number().numberBetween(1, 100));

        return produto;
    }



}

