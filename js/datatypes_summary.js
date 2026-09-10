// Primitive Data Types in JavaScript
// Types : Number, string, boolean, null, undefined, symbol, bigint

const score = 100; // Number
const scoreValue = 100.5; // Number
const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined
const id = Symbol("123"); // Symbol
const anotherId = Symbol("123"); // Symbol
console.log(id === anotherId); // false
const bigNumber = 12345678901234567890n; // BigInt


// Non-Primitive Data Types in JavaScript
// Types : Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet

const heros = ["Ironman", "Spiderman", "Thor"]; // Array
let myObj = {
    Name: "Sharmistha", // Object
    Age: 19,
}
const myFunction = function() { // Function
    console.log("Hello World");
}
console.log(typeof scoreValue); // number
console.log(typeof bigNumber); // bigint
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof scoreValue); // number
console.log(typeof null); // object
console.log(typeof anotherId); // symbol