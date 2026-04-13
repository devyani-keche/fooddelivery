export class Order {
    getDescription() { return "Basic Order"; }
    getCost() { return 0; }
}

export class BasicOrder extends Order {
    getDescription() { return "Margherita Pizza"; }
    getCost() { return 10.0; }
}

export class OrderDecorator extends Order {
    constructor(order) {
        super();
        this.order = order;
    }
    getDescription() { return this.order.getDescription(); }
    getCost() { return this.order.getCost(); }
}

export class ExtraCheese extends OrderDecorator {
    getDescription() { return this.order.getDescription() + ", Extra Cheese"; }
    getCost() { return this.order.getCost() + 2.5; }
}

export class ExpressDelivery extends OrderDecorator {
    getDescription() { return this.order.getDescription() + ", Express Delivery"; }
    getCost() { return this.order.getCost() + 5.0; }
}
