package tests;

public class Person {

    private String FirstName;
    private String LastName;
    private int Age;


    public Person(){

    }

    public Person (String firstName, String lastName, int age) {

        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;

    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        this.LastName = lastName;
    }

    public int getAge() {
        return Age;
    }

    public void setAge(int age) {
        this.Age = age;
    }
}
