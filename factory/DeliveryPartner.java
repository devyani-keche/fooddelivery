package factory;

public class DeliveryPartner extends User {
    public DeliveryPartner(String name) {
        super(name);
    }

    public void displayRole() {
        System.out.println(name + " is a Delivery Partner");
    }
}