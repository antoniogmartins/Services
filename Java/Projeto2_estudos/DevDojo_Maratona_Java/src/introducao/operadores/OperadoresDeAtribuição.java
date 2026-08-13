package introducao.operadores;

public class OperadoresDeAtribuição {

    static void main() {
       double salario1 = 1800;
       double salario2 = 2000;
       int salario3 = 1000;
       int salario4 = 500;

       int numero = 11;
       numero %=2;
       System.out.println("Número: " + numero);

       salario1 = salario1 + 1000;
       salario2 = salario2 + (salario1 * 0.1);
       salario3 = (int) (salario3 + (salario2 * 0.1));
       salario4 = (int) (salario4 + (salario3 * 0.1));

       System.out.println("Salário 1: " + salario1);
       System.out.println("Salário 2: " + salario2);
       System.out.println("Salário 3: " + salario3);
       System.out.println("Salário 4: " + salario4);

    }
}
