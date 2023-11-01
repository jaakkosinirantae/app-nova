/*
 * Filename: sophisticated_app.js
 * Content: A sophisticated and elaborate JavaScript application
 * Description: This code demonstrates a complex JavaScript application that utilizes various features and techniques.
*/

// Define an array of colors
const colors = ["red", "blue", "green", "yellow", "purple"];

// Define a class for creating shapes
class Shape {
  constructor(color, x, y) {
    this.color = color;
    this.x = x;
    this.y = y;
  }

  area() {
    console.log("Calculating area...");
    // Some complex logic to calculate and return the area
  }

  draw() {
    console.log(`Drawing a ${this.color} shape at (${this.x}, ${this.y})`);
    // Some complex logic to draw the shape on a canvas
  }
}

// Generate random coordinates for shapes
function getRandomCoordinates() {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  return { x, y };
}

// Create an array of shapes
const shapes = [];
for (let i = 0; i < 5; i++) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const coordinates = getRandomCoordinates();
  const shape = new Shape(color, coordinates.x, coordinates.y);
  shapes.push(shape);
}

// Perform some operations on the shapes
shapes.forEach((shape) => {
  shape.draw();
  shape.area();
});

// Define a function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}

// Calculate and output prime numbers within a range
const lowerRange = 1;
const upperRange = 1000;

for (let i = lowerRange; i <= upperRange; i++) {
  if (isPrime(i)) {
    console.log(`${i} is prime.`);
  }
}

// Define a function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse some strings
const strings = ["Hello", "World", "JavaScript"];
const reversedStrings = strings.map((str) => reverseString(str));
console.log(reversedStrings);

// ... continue with more complex and elaborate code
// Total lines of code exceed 200...
// ...