package tests;

public class testePerson {

    public static void main(String[] ars){

    Person person = new Person("Antonio", "Martins", 55);
    System.out.println("Nome: "+ person.getFirstName());
    System.out.println("Segundo Nome: "+ person.getLastName());
    System.out.println("Idade: "+ person.getAge());;

    person.setFirstName("José");
    System.out.println("Nome: "+ person.getFirstName());
    person.setLastName("Maria");
    System.out.println("Segundo Nome: "+ person.getLastName());
    person.setAge(54);
    System.out.println("Idade: "+ person.getAge());;

    }
}