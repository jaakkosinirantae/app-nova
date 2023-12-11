/* Filename: ComplexApp.js */

// Application to manage an online store

// Class to represent a product
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.price * this.quantity;
  }
}

// Class to manage the store
class Store {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  getProducts() {
    return this.products;
  }

  getTotalInventoryValue() {
    let totalValue = 0;
    this.products.forEach((product) => {
      totalValue += product.calculateTotalPrice();
    });
    return totalValue;
  }
}

// Initializing the store
const store = new Store();

// Adding products to the store
store.addProduct(new Product(1, 'Shirt', 20, 10));
store.addProduct(new Product(2, 'Pants', 30, 5));
store.addProduct(new Product(3, 'Shoes', 50, 2));

// Removing a product from the store
store.removeProduct(2);

// Displaying the products in the store
console.log('Products in the store:');
store.getProducts().forEach((product) => {
  console.log(`ID: ${product.id} | Name: ${product.name} | Price: $${product.price} | Quantity: ${product.quantity}`);
});

// Calculating the total inventory value
console.log(`Total inventory value: $${store.getTotalInventoryValue()}`);
