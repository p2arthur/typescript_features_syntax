//----------------------------------------------------------------------------
// ### Type inference - We should always use type inference unless we face a few cases
// ------Primitive types
let apples = 5;
let speed = 'fast';
let hasName = true;

let nothingMuch = null;
let nothing = undefined;

// ------Object types
// built in objects
let now = new Date();

// Array
let colors = ['red', 'blue', 'orange'];
let grades = [1, 2, 3, 4, 5, 6];
let truths = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber = (i: number) => {
  console.log(i);
};

//----------------------------------------------------------------------------
// When to use Type annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable in one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
foundWord = words.includes('green');

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (const number of numbers) {
  if (number > 0) {
    numberAboveZero = number;
  }
}

//----------------------------------------------------------------------------
