// Filename: complexCodeExample.js
// Description: A complex code example demonstrating a custom implementation of a linked list data structure and various methods for manipulation and traversal.

// Custom implementation of a Node class for the linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Custom implementation of a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Method to add a node at the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Method to insert a node at a given position in the linked list
  insertAt(position, data) {
    if (position < 0 || position > this.length) {
      throw new Error('Invalid position');
    }

    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (position === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let previousNode = null;
      let currentNode = this.head;
      let currentPosition = 0;

      while (currentPosition < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      newNode.next = currentNode;
      previousNode.next = newNode;
    }

    this.length++;
  }

  // Method to remove a node from the linked list at a given position
  removeAt(position) {
    if (position < 0 || position >= this.length || this.length === 0) {
      throw new Error('Invalid position');
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentPosition = 0;

    if (position === 0) {
      this.head = currentNode.next;
    } else {
      while (currentPosition < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      previousNode.next = currentNode.next;

      if (position === this.length - 1) {
        this.tail = previousNode;
      }
    }

    this.length--;
    currentNode.next = null;
  }

  // Method to get the value of a node at a given position
  get(position) {
    if (position < 0 || position >= this.length || this.length === 0) {
      throw new Error('Invalid position');
    }

    let currentNode = this.head;
    let currentPosition = 0;

    while (currentPosition < position) {
      currentNode = currentNode.next;
      currentPosition++;
    }

    return currentNode.data;
  }

  // Method to update the value of a node at a given position
  update(position, newData) {
    if (position < 0 || position >= this.length || this.length === 0) {
      throw new Error('Invalid position');
    }

    let currentNode = this.head;
    let currentPosition = 0;

    while (currentPosition < position) {
      currentNode = currentNode.next;
      currentPosition++;
    }

    currentNode.data = newData;
  }

  // Method to search for a specific value within the linked list
  search(value) {
    let currentNode = this.head;
    let currentPosition = 0;

    while (currentNode) {
      if (currentNode.data === value) {
        return currentPosition;
      }

      currentNode = currentNode.next;
      currentPosition++;
    }

    return -1;
  }

  // Method to reverse the linked list
  reverse() {
    let previousNode = null;
    let nextNode = null;
    let currentNode = this.head;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = previousNode;
  }

  // Method to print the linked list
  print() {
    let currentNode = this.head;
    let listString = '';

    while (currentNode) {
      listString += currentNode.data + ' -> ';
      currentNode = currentNode.next;
    }

    listString += 'null';
    console.log(listString);
  }
}

// Example usage of the LinkedList class and its methods
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);

linkedList.insertAt(2, 25);
linkedList.insertAt(4, 35);

console.log('Linked list after insertions:');
linkedList.print();

linkedList.update(3, 50);
console.log('Linked list after updating position 3 with 50:');
linkedList.print();

console.log('Position of value 50 in the linked list: ', linkedList.search(50));

linkedList.removeAt(2);
console.log('Linked list after removing node at position 2:');
linkedList.print();

linkedList.reverse();
console.log('Linked list after reversing:');
linkedList.print();

console.log('Value at position 1 in the linked list: ', linkedList.get(1));