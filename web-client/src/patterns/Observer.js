export class OrderStatus {
    constructor() {
        this.observers = [];
        this.status = "Order Placed";
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    setStatus(newStatus) {
        this.status = newStatus;
        this.notifyObservers();
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.status);
        }
    }
}

export class CustomerObserver {
    constructor(callback) { this.callback = callback; }
    update(status) { this.callback && this.callback(`Customer Notice: Order is now '${status}'`); }
}

export class RestaurantObserver {
    constructor(callback) { this.callback = callback; }
    update(status) { this.callback && this.callback(`Restaurant Alert: Order is '${status}'`); }
}

export class DeliveryObserver {
    constructor(callback) { this.callback = callback; }
    update(status) { this.callback && this.callback(`Delivery Info: Order is '${status}'`); }
}
