import factory.*;
import decorator.*;
import observer.*;

public class Main {
    public static void main(String[] args) {

        // 🔹 Factory Pattern
        User customer = UserFactory.createUser("customer", "Devyani");
        User restaurant = UserFactory.createUser("restaurant", "Dominos");
        User delivery = UserFactory.createUser("delivery", "Rahul");

        customer.displayRole();
        restaurant.displayRole();
        delivery.displayRole();

        System.out.println("\n--- Order Creation ---");

        // 🔹 Decorator Pattern
        Order order = new BasicOrder();
        order = new ExtraCheese(order);
        order = new ExpressDelivery(order);

        System.out.println("Order: " + order.getDescription());
        System.out.println("Total Cost: " + order.getCost());

        System.out.println("\n--- Order Tracking ---");

        // 🔹 Observer Pattern
        OrderStatus orderStatus = new OrderStatus();

        orderStatus.addObserver(new CustomerObserver());
        orderStatus.addObserver(new RestaurantObserver());
        orderStatus.addObserver(new DeliveryObserver());

        orderStatus.setStatus("Order Placed");
        orderStatus.setStatus("Preparing");
        orderStatus.setStatus("Out for Delivery");
        orderStatus.setStatus("Delivered");
    }
}