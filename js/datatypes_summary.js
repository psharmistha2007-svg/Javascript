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

// Stack(Primitives) and Heap(Non-Primitives) Memory Allocation in JavaScript

let myYoutubeChannel = "Codevolution"; // Stack Memory
let anotherChannel = myYoutubeChannel; // Stack Memory
anotherChannel = "Codevolution2"; // Stack Memory
console.log(myYoutubeChannel); // Codevolution
console.log(anotherChannel); // Codevolution

let user = {
    Email: "user@google.com", // Heap Memory
    upi: "user@ybl", // Heap Memory
}
let admin = user; // Heap Memory
admin.Email = "admin@google.com"; // Modifying the object through the admin reference
console.log(user.Email); // admin@google.com
console.log(admin.Email); 