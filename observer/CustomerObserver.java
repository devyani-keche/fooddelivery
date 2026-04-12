package observer;

public class CustomerObserver implements Observer {
    public void update(String status) {
        System.out.println("Customer notified: " + status);
    }
}