# 🍔 Smart Food Delivery System – Design Patterns Project

## 📌 Project Overview
This project implements a **Smart Food Delivery System** using core **Object-Oriented Design Patterns** in Java. It simulates a real-world food ordering platform where users can place orders, customize them, and track their status.

The main goal is to demonstrate the practical use of **Creational, Structural, and Behavioral design patterns** in a meaningful and integrated way.

---

## 🎯 Design Patterns Used

### 1️⃣ Creational Pattern – Factory Pattern
- Used to create different types of users:
  - Customer
  - Restaurant
  - Delivery Partner  
- Centralizes object creation and improves scalability.

---

### 2️⃣ Structural Pattern – Decorator Pattern
- Used to dynamically add features to an order:
  - Extra Cheese
  - Express Delivery  
- Allows flexible addition of functionalities without modifying existing code.

---

### 3️⃣ Behavioral Pattern – Observer Pattern
- Used for order status updates:
  - Order Placed
  - Preparing
  - Out for Delivery
  - Delivered  
- Notifies multiple entities (Customer, Restaurant, Delivery Partner) automatically.

---

## 🧩 System Workflow

1. User is created using Factory Pattern  
2. Order is placed  
3. Order is customized using Decorator Pattern  
4. Order status is updated  
5. All stakeholders are notified using Observer Pattern  


