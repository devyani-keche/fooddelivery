package factory;

public class Customer extends User {
    public Customer(String name) {
        super(name);
    }

    public void displayRole() {
        System.out.println(name + " is a Customer");
    }
}