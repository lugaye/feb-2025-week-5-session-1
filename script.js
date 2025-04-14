//Variables - named container that stores data values

//1. var - used to declare variables that can be re-assigned (traditional way)
// keyword var = value;
var name = "Instructor Eddy"; 
//console.log(name); // Output: Instructor Eddy

//2. let - used to declare variables that can be re-assigned (modern way)
// keyword let = value;
let age = 30;
//console.log(age); // Output: 30

age = 50; // re-assigning the value of age
name = "Instructor John"; // re-assigning the value of name
//console.log(name); // Output: Instructor John
//console.log(age); // Output: 50

//3. const - used to declare variables that cannot be re-assigned (constant value)
// keyword const = value;
const pi = 1; // pi is a constant value
//console.log(pi); // Output: 3.14
//pi = 1;
// Error: Assignment to constant variable. (Uncommenting this line will cause an error)

// Data Types - different types of data that can be stored in variables
// 1. String - a sequence of characters enclosed in quotes
let nameString = "Instructor Eddy"; // String
//2. Number - a numeric value (integer or float)
let ageNumber = 30; // Number (integer)
const piNumber = 3.14; // Number (float)   
//3. Boolean - a true or false value
let isInstructor = true; // Boolean (true or false)    
//4. Null - a special value that represents "no value"
let emptyValue = null; // Null (no value assigned)
//let age = 0;
//let name = '';
//5. Undefined - a variable that has been declared but not assigned a value
let undefinedValue; // Undefined (no value assigned

// Non Primitivwe Data Types - complex data types that can hold multiple values
//1. Object - a collection of key-value pairs
let person = { // Object
    name: "Instructor Eddy",
    age: 30,
    isInstructor: true
};

let car = { //object
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red",
};

let fruit = {
    name: "Mango",
    color: "Yellow",
    taste: "Sweet"
  };
  


// console.log(fruit);    // Output: { name: 'Instructor Eddy', age: 30, isInstructor: true }

//2. Array - an ordered list of values (can be of different data types) indexed by numbers starting from 0
let colors = ["red", "green", "blue"]; // Array of strings
//console.log(colors); // Output: ["red", "green", "blue"]
//console.log(colors[0]); // Output: red (first element of the array)

let cars = ["Toyota", "Honda", "Ford", "BMW", "Porsche", "Mercedes", "Volvo", "VW"]; // Array of strings


//3 . Function - a block of code that performs a specific task and can be reused
/*
function functionName(parameter1, parameter2) {
    // code to be executed
    return value; // optional return statement
}

*/


function greet(name, email) {
    return "hello my name is " + name + "! my email address is " + email;
}

//console.log(greet("Eddy", "eddy@mail.com"));


// OPERATORS - symbols that perform operations on variables and values
// 1. Arithmetic Operators - used to perform mathematical operations

let a = 50; // Number
let b = 20; // Number
//console.log(a % b);

//2. Assignment Operators - used to assign values to variables
let x = 10; // Number
let y = 5; // Number
x += y; // x = x + y (addition assignment)
//console.log(x); // Output: 15 (x is now 15)
//x -= y; // x = x - y (subtraction assignment) \
//x *= y; // x = x * y (multiplication assignment)
//x /= y; // x = x / y (division assignment)    

//3. Comparison Operators - used to compare two values and return a boolean result (true or false)
// == - equal to
// === - equal value and equal type 
// != - not equal to
// !== - not equal value or not equal type
// > - greater than
// < - less than
// >= - greater than or equal to
// <= - less than or equal to

let d = 100;
let e = '200'; 

console.log(d == e); // Output: false (different types)
console.log(d === e); // Output: false (different types) 
console.log(d != e); // Output: true (different types)
console.log(d !== e); // Output: true (different types)
console.log(d > e); // Output: false (100 is not greater than 200)
console.log(d < e); // Output: true (100 is less than 200) 
console.log(d >= e); // Output: false (100 is not greater than or equal to 200)
console.log(d <= e); // Output: true (100 is less than or equal to 200) 

//4. Logical Operators - used to combine multiple expressions
// && - logical AND (true if both expressions are true)
// || - logical OR (true if at least one expression is true)
// ! - logical NOT (inverts the boolean value)


console.log((d < e) && (d <= e)); // true (both conditions are true)
console.log((d < e) || (d <= e)); // true 
console.log(!(d < e)); // false


let myAge = 25;
let isLearner = true;