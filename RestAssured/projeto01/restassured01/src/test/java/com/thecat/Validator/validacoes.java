package com.thecat.Validator;

public class validacoes {

    public boolean validarTexto(String esperado, String atual) {
        return esperado.trim().equals(atual.trim());
    }

    public boolean validarNumero(int esperado, int atual) {
        return esperado == atual;
    }

}
