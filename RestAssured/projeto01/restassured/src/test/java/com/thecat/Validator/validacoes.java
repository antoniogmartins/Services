package com.thecat.Validator;

public class validacoes {

    public boolean validarTitulo(String resultado_Esperado, String resultado_Atual) {
        return resultado_Esperado.equals(resultado_Atual);
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

    public boolean listarecurso_quantidade_id(int quantidadeEsperada, int quantidadeAtual) {
        return quantidadeAtual == quantidadeEsperada;
    }

    public boolean listartodosrecurso_qtd_userId(int quantidadeEsperada, int quantidadeAtual) {
        return quantidadeAtual == quantidadeEsperada;
    }

    public boolean filtrarecurso_quantidade_id(int quantidadeEsperada, int quantidadeAtual) {
        return quantidadeAtual == quantidadeEsperada;
    }

    public boolean filtrarecurso_quantidade_userId(int quantidadeEsperada, int quantidadeAtual) {
        return quantidadeAtual == quantidadeEsperada;
    }

    public boolean listarhierarquiarecurso_names(int quantidadeEsperada, int quantidadeAtual){
        return quantidadeAtual == quantidadeEsperada;
    }

    public boolean listarhierarquiarecurso_email(int quantidadeEsperada, int quantidadeAtual){
        return quantidadeAtual == quantidadeEsperada;
    }

    public boolean listarhierarquiarecurso_postId(int quantidadeEsperada, int quantidadeAtual) {
        return quantidadeAtual == quantidadeEsperada;
    }


    public boolean criarecurso_Titulo(String resultado_Esperado, String resultado_Atual) {
        return resultado_Esperado.equals(resultado_Atual);
    }

    public boolean criarecurso_Corpo(String resultado_Esperado, String resultado_Atual) {
        return resultado_Esperado.equals(resultado_Atual);
    }

    public boolean criarecurso_userid(int resultado_Esperado, int resultado_Atual) {
        return resultado_Esperado == resultado_Atual;
    }

    public boolean criarecurso_Id(int resultado_Esperado, int resultado_Atual) {
        return resultado_Esperado == resultado_Atual;
    }

    public boolean atualizarecurso_Titulo(String resultado_Esperado, String resultado_Atual) {
        return resultado_Esperado.equals(resultado_Atual);
    }

    public boolean atualizarecurso_Corpo(String resultado_Esperado, String resultado_Atual) {
        return resultado_Esperado.equals(resultado_Atual);
    }

    public boolean atualizarecurso_userid(int resultado_Esperado, int resultado_Atual) {
        return resultado_Esperado == resultado_Atual;
    }

    public boolean atualizarecurso_id(int resultado_Esperado, int resultado_Atual) {
        return resultado_Esperado == resultado_Atual;
    }

    public boolean deletarecurso_id(String resultado_Esperado, String resultado_Atual){
        return resultado_Atual.trim().equals(resultado_Esperado.trim());
    }
}
