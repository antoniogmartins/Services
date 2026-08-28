package com.thecat.Validator;

public class validacoes {

    public String buscarecurso_Titulo(String titulo){
        return titulo = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
    }

    public String buscarecurso_Corpo(String corpo){
        return corpo = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";
    }

    public Integer buscarecurso_id(Integer id){
        return id = 1;
    }

    public boolean listarecurso_quantidade_id(Integer quantidadeid){
        return quantidadeid > 99;
    }

    public boolean filtrarecurso_quantidade_id(Integer quantidadeid){
        return quantidadeid > 9;
    }


}
