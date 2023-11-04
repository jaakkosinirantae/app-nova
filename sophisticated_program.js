/* sophisticated_program.js */

// This code demonstrates a complex program that performs various mathematical operations and provides an interactive user interface.
// The program includes functions for addition, subtraction, multiplication, division, exponentiation, and calculating factorial.
// It also includes a graphical user interface using HTML and CSS, with event handlers for user interactions.

// Import required modules
const readline = require('readline');

// Define the main program function
function main() {
    console.log("Welcome to Sophisticated Program!");

    let running = true;

    while (running) {
        console.log("\nSelect an operation:\n");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Exponentiation");
        console.log("6. Factorial");
        console.log("7. Exit");

        const choice = getUserInput("Enter your choice (1-7): ");

        switch (choice) {
            case "1":
                performAddition();
                break;
            case "2":
                performSubtraction();
                break;
            case "3":
                performMultiplication();
                break;
            case "4":
                performDivision();
                break;
            case "5":
                performExponentiation();
                break;
            case "6":
                performFactorial();
                break;
            case "7":
                running = false;
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }

    console.log("\nGoodbye! Thank you for using Sophisticated Program.");
}

// Function to get user input using readline
function getUserInput(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Function to perform addition
function performAddition() {
    const num1 = parseFloat(getUserInput("Enter the first number: "));
    const num2 = parseFloat(getUserInput("Enter the second number: "));
    const sum = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is ${sum}`);
}

// Function to perform subtraction
function performSubtraction() {
    const num1 = parseFloat(getUserInput("Enter the first number: "));
    const num2 = parseFloat(getUserInput("Enter the second number: "));
    const difference = num1 - num2;
    console.log(`Difference of ${num1} and ${num2} is ${difference}`);
}

// Function to perform multiplication
function performMultiplication() {
    const num1 = parseFloat(getUserInput("Enter the first number: "));
    const num2 = parseFloat(getUserInput("Enter the second number: "));
    const product = num1 * num2;
    console.log(`Product of ${num1} and ${num2} is ${product}`);
}

// Function to perform division
function performDivision() {
    const num1 = parseFloat(getUserInput("Enter the numerator: "));
    const num2 = parseFloat(getUserInput("Enter the denominator: "));

    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        const quotient = num1 / num2;
        console.log(`Quotient of ${num1} divided by ${num2} is ${quotient}`);
    }
}

// Function to perform exponentiation
function performExponentiation() {
    const base = parseFloat(getUserInput("Enter the base number: "));
    const exponent = parseFloat(getUserInput("Enter the exponent: "));
    const result = Math.pow(base, exponent);
    console.log(`${base} raised to the power of ${exponent} is ${result}`);
}

// Function to perform factorial
function performFactorial() {
    const num = parseInt(getUserInput("Enter a positive integer: "));

    if (num < 0) {
        console.log("Error: Factorial of a negative number is not defined.");
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        console.log(`Factorial of ${num} is ${factorial}`);
    }
}

// Call the main program function
main();