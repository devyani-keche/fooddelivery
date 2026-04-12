package decorator;

public class ExtraCheese extends OrderDecorator {
    public ExtraCheese(Order order) {
        super(order);
    }

    public String getDescription() {
        return order.getDescription() + ", Extra Cheese";
    }

    public double getCost() {
        return order.getCost() + 30;
    }
}