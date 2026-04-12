package decorator;

public class BasicOrder implements Order {
    public String getDescription() {
        return "Base Food Order";
    }

    public double getCost() {
        return 100.0;
    }
}