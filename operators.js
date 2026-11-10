console.log("===== Arithmetic Operators =====");

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);
console.log("Modulus: ", num1 % num2);

console.log("===== Assignment Operators =====");

let result = 10;

result += 4;
console.log("Addition Assignment (+=): ", result);

result -= 5;
console.log("Subtraction Assignment (-=): ", result);

result *= 3;
console.log("Multiplication Assignment (*=): ", result);

result /= 5;
console.log("Division Assignment (/=): ", result);

result %= 3;
console.log("Modulus Assignment (%=): ", result);