package br.com.abc.introducao.arrays;

public class Arrays4 {

    static void main() {

        String[] names = {"Juju", "Joao Paulo", "Xuxa"};
        System.out.println(names.length);
        System.out.println(names.getClass().getSimpleName());
        System.out.println(names[0]);
        System.out.println(names[1]);
        System.out.println(names[2]);
        System.out.println("====== Imprimindo no 1.for o array ======");
        for (String name: names){
            System.out.println(name);
        }
        System.out.println("====== Imprimindo no 2.for o array ======");
        for (int i=0; i<names.length; i++){
            System.out.println(i + ": " + names[i]);
        }

    }
}
