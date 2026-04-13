import React, { useState, useEffect, useMemo } from 'react';
import './index.css';

import { UserFactory } from './patterns/Factory';
import { BasicOrder, ExtraCheese, ExpressDelivery } from './patterns/Decorator';
import { OrderStatus, CustomerObserver, RestaurantObserver, DeliveryObserver } from './patterns/Observer';

function App() {
  // --- FACTORY PATTERN STATE ---
  const [users, setUsers] = useState([]);
  
  const generateUsers = () => {
    const cust = UserFactory.createUser("Customer", "Devyani");
    const rest = UserFactory.createUser("Restaurant", "Jiya's Pizza");
    const deli = UserFactory.createUser("Delivery", "Aakarsh");
    setUsers([cust, rest, deli]);
  };

  // --- DECORATOR PATTERN STATE ---
  const [hasCheese, setHasCheese] = useState(false);
  const [hasExpress, setHasExpress] = useState(false);
  
  const [orderDesc, setOrderDesc] = useState("");
  const [orderCost, setOrderCost] = useState(0);

  useEffect(() => {
    let order = new BasicOrder();
    if (hasCheese) order = new ExtraCheese(order);
    if (hasExpress) order = new ExpressDelivery(order);
    
    setOrderDesc(order.getDescription());
    setOrderCost(order.getCost());
  }, [hasCheese, hasExpress]);

  // --- OBSERVER PATTERN STATE ---
  const orderSteps = ["Order Placed", "Preparing", "Out for Delivery", "Delivered"];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [notifications, setNotifications] = useState([]);

  // Use a ref or memo for the OrderStatus subject so it persists
  const orderStatusSubject = useMemo(() => {
    const subject = new OrderStatus();
    subject.addObserver(new CustomerObserver((msg) => addNotification(msg)));
    subject.addObserver(new RestaurantObserver((msg) => addNotification(msg)));
    subject.addObserver(new DeliveryObserver((msg) => addNotification(msg)));
    return subject;
  }, []);

  const addNotification = (msg) => {
    setNotifications(prev => [...prev, msg].slice(-6)); // Keeps last 6
  };

  const advanceOrder = () => {
    if (currentStepIndex < orderSteps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      orderStatusSubject.setStatus(orderSteps[nextIndex]);
    }
  };

  return (
    <div className="app-container">
      <h1 className="h1-title">Food Delivery Simulator</h1>
      
      {/* FACTORY SECTION */}
      <div className="glass-card">
        <h2 className="section-title">1. Users (Factory Pattern)</h2>
        {users.length === 0 ? (
          <button className="btn" onClick={generateUsers}>Generate Users</button>
        ) : (
          <div className="flex-row">
            {users.map((u, i) => (
              <div key={i} className="role-badge">
                {u.role}: {u.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DECORATOR SECTION */}
      <div className="glass-card">
        <h2 className="section-title">2. Build Order (Decorator Pattern)</h2>
        <div className="flex-col">
          <div className="addon-toggle">
            <span>Margherita Pizza (Base)</span>
            <span>$10.0</span>
          </div>
          <label className="addon-toggle">
            <span>Extra Cheese (+$2.5)</span>
            <input type="checkbox" checked={hasCheese} onChange={(e) => setHasCheese(e.target.checked)} />
          </label>
          <label className="addon-toggle">
            <span>Express Delivery (+$5.0)</span>
            <input type="checkbox" checked={hasExpress} onChange={(e) => setHasExpress(e.target.checked)} />
          </label>
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Current Order:</div>
            <div>{orderDesc || "Basic Order"}</div>
          </div>
          <div className="cost-display">${orderCost.toFixed(2)}</div>
        </div>
      </div>

      {/* OBSERVER SECTION */}
      <div className="glass-card">
        <h2 className="section-title">3. Live Tracking (Observer Pattern)</h2>
        
        <div className="stepper">
          {orderSteps.map((step, idx) => (
            <div key={idx} className={`step-item ${idx <= currentStepIndex ? 'active' : ''}`}>
              {step}
            </div>
          ))}
        </div>
        
        <button 
          className="btn" 
          onClick={advanceOrder} 
          disabled={currentStepIndex >= orderSteps.length - 1}
        >
          {currentStepIndex >= orderSteps.length - 1 ? "Delivered!" : "Advance Status"}
        </button>

        <div className="notifications-container">
          {notifications.map((msg, idx) => (
            <div key={idx} className="notification-item">{msg}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
