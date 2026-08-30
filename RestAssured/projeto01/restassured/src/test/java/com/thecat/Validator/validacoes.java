package com.thecat.Validator;

public class validacoes {

    public boolean validarTitulo(String esperado, String atual) {
        return esperado.equals(atual);
    }

    public boolean validarId(int esperado, int atual) {
        return esperado == atual;
    }

    public boolean validarCorpo(String esperado, String atual) {
        return esperado.equals(atual);
    }

    public boolean buscarecurso_qtd_userId(int quantidade_userId){
         return quantidade_userId < 2;
    }

    public boolean listarecurso_quantidade_id(int quantidade_id){
        return quantidade_id > 99;
    }

    public boolean listartodosrecurso_qtd_userId(int quantidade_userId){
        return quantidade_userId > 9;
    }

    public boolean filtrarecurso_quantidade_id(int quantidade_id){
        return quantidade_id > 9;
    }

    public boolean filtrarecurso_quantidade_userId(int quantidadeEsperada, int quantidadeAtual) {
        return quantidadeAtual == quantidadeEsperada;
    }

    public boolean listarhierarquiarecurso_names(int quantidade_name){
        return quantidade_name > 4;
    }

    public boolean listarhierarquiarecurso_email(int quantidade_email){
        return quantidade_email > 4;
    }

    public boolean listarhierarquiarecurso_postId(int quantidadeEsperada, int quantidadeAtual) {
        return quantidadeAtual == quantidadeEsperada;
    }





    public String criarecurso_Titulo(String titulo){
        return titulo = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
    }

    public String criarecurso_Corpo(String corpo){
        return corpo = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";
    }

    public String criarecurso_userid(String userid){
        return userid = "1";
    }
    public boolean criarecurso_id(Integer quantidade_id){
        return quantidade_id < 2;
    }

    public String atualizarrecurso_Titulo(String titulo){
        return titulo = "xavvsunt aut facere repellat provident occaecati excepturi optio reprehenderit";
    }

    public String atualizarecurso_Corpo(String corpo){
        return corpo = "atualizar quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";
    }

    public String atualizarecurso_userid(String userid){
        return userid = "1";
    }
    public boolean atualizarecurso_id(int quantidade_id){
        return quantidade_id < 2;
    }
    public boolean deletarecurso_id(boolean quantidade){
        return quantidade == true;
    }
}
