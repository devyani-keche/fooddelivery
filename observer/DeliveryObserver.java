package observer;

public class DeliveryObserver implements Observer {
    public void update(String status) {
        System.out.println("Delivery Partner notified: " + status);
    }
}