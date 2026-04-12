package decorator;

public class ExpressDelivery extends OrderDecorator {
    public ExpressDelivery(Order order) {
        super(order);
    }

    public String getDescription() {
        return order.getDescription() + ", Express Delivery";
    }

    public double getCost() {
        return order.getCost() + 50;
    }
}