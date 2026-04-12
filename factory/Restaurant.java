package factory;

public class Restaurant extends User {
    public Restaurant(String name) {
        super(name);
    }

    public void displayRole() {
        System.out.println(name + " is a Restaurant");
    }
}