package br.com.abc.javacore.modificadorestatico.classes;

public class Cliente {
    // 0 - Bloco de inicialização é executado quando a JVM carregar a classe (é executado apenas 1 vez)
    // 1 - Alocado espaço da memoria para o objeto que será criado
    // 2 - Cada atributo de classe é criado e inicializado com seus valoes default ou valores explicitos
    // 3 - Bloco de inicialização é executado
    // 4 - O construtor é executado

    private static int[] parcelas;
    //= {1,2,3,4,5,6,7,8,9,10};
    {
        System.out.println("Bloco de inicialização não estático");
    }

    static {
        System.out.println("Inside initialization block - Bloco de inicialização");
        parcelas = new int[100];
        for(int i=1;i<=100;i++) {
           parcelas[i-1] = i;
        //    System.out.println(parcelas[i-1]);
        }
    }

   public Cliente() {
    }

   public static int[] getParcelas()
   {
        return parcelas;
   }

/*   public static void setParcelas(int[] parcelas) {
        cliente.parcelas = parcelas;
   }
*/

}

