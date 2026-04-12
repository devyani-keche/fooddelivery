package factory;

public class UserFactory {
    public static User createUser(String type, String name) {
        if (type.equalsIgnoreCase("customer")) {
            return new Customer(name);
        } else if (type.equalsIgnoreCase("restaurant")) {
            return new Restaurant(name);
        } else if (type.equalsIgnoreCase("delivery")) {
            return new DeliveryPartner(name);
        }
        return null;
    }
}