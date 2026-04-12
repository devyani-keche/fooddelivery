package observer;

public class RestaurantObserver implements Observer {
    public void update(String status) {
        System.out.println("Restaurant notified: " + status);
    }
}