package br.com.abc.introducao.controledefluxo;

public class ControleFluxo2 {

    static void main() {
        int idade = 3;
        String status;

        if(idade < 18){
            status = "Menor de idade";
        } else {
            status = "Maior de idade";
        }
        status = idade >=19? "Adulto": idade >=15 && idade <=18 ? "Juvenil" :
                idade >=12 && idade < 15 ? "Infantil" : idade >=4 && idade < 12 ? "Criança" : "Idade inválida";
        System.out.println("Status: " + status);
    }
}
