//---- CONSOLE ----//
// Go over console in dev tools 
// Discuss gotcha's in console's i.e variable redeclarations allowed
// Best practice to code in JS file and run files in console

//---- DATA TYPES ----//
// Go over different data types:
// 8 basic data types in JS
// String - What are the three ways we can define a string?
// Number 
// Boolean
// BigInt - A BigInt number is created by appending n to the end of an integer
// Object
// Symbols
// Null
// Undefined

// console.log(typeof "Hello World!") //string
// console.log(typeof 3) // number
// console.log(typeof 3.14) // number
// console.log(typeof {name: "timmy", breed: "Siamese"}) // object
// console.log(typeof ['Hello', 'World']) // object gotcha! array is not a datatype, it is a data structure
// console.log(typeof null) // object gotcha!
// console.log(typeof undefined) // undefined
// console.log(typeof true) // boolean
// console.log(typeof Symbol("name")) // symbol
// console.log(typeof typeof 900719925124740998n) 
// console.log(typeof NaN) // number gotcha!

// What is a primitive data type? a datatype that can only store a single piece of data

// Of the data types we went over, which one is not considered a primitive data type
// Object

// Why is an object not a primitive? Can store collections of data

//---- OPERATORS ----//
// x = y is assignment
// x += y addition assignment
// 1 + 1 // returns 2 
// "1" + 1 // returns 11
// 3 == '3' // returns true
// 3 === '3' // returns false, strict equals
// x = 3 ++x returns 4 x++ returns 3

//---- DATATYPE GOTCHAS ----// 

// console.log(0 == false) // true
// console.log(0 === false) // false
// console.log("" == 0) // true 
// console.log("" == "0") // false
// console.log(true + 1) // 2
// show students Number(true)
// console.log(false + false) // 0
// show students Number(false)

// Add/Subtract
// console.log("Thing" + 1); // "Thing1"
// console.log("Thing" - 1); // NaN


//---- VARIABLES ----//
// what is a variable?
// why do we use variables?

//---- Variable naming ----//
// what is wrong with the following variable
// let 1jedi = 'Yoda' // variables shouldn't start with numbers

// fix these
// let lukeskywalker = 'Luke Skywalker'
// let break = 'Darth Vader' // SyntaxError: Unexpected token 'break' / reserved key
// const counter = 0
// console.log(++counter)

//----Variable Scopes ----//
// global scope
// let character = "Chewbacca";

// block scope
// console.log(character)
// if (true) {
//     let character = "Han Solo"
// }
// ReferenceError: character is not defined

// what to expect here?
// if (true) {
//     character = "Han Solo"
// }
// console.log(character) // returns 'Han Solo'

//---- READING ERRORS ----//
// console.log(student)
// ReferenceError: student is not defined

// let test name = "aysan"
// SyntaxError: Unexpected identifier

// let name = "aysan"
// let name = "bob"
// SyntaxError: Identifier 'name' has already been declared

// const cat = 'rose'
// cat = 'timmy'
// TypeError: Assignment to constant variable.
