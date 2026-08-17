package br.com.abc.javacore.blocodeinicializacao.classes;

public class Cliente {
    private int[] parcelas = {1,2,3,4,5,6,7,8,9,10};
    {
        System.out.println("Inside initialization block");
        parcelas = new int[100];
        for(int i=1;i<=100;i++) {
           parcelas[i-1] = i;
            System.out.println(parcelas[i-1]);
        }
    }

   public Cliente() {
    }


   public int[] getParcelas() {
        return this.parcelas;
    }

   public void setParcelas(int[] parcelas) {
        this.parcelas = parcelas;
   }






}
