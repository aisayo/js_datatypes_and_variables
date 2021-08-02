//---- DATA TYPES ----//
// What are the different data types we can work with in JS?
// 8 basic data types in JS:
// String 
// Number 
// Boolean
// BigInt - A BigInt number is created by appending n to the end of an integer
// Object
// Symbols
// Null
// Undefined

// What are the different ways we can define a string?
// "Using double quotation marks"
// 'Using single quotation marks'
// `Using backticks so we can ${interpolate}`

// What are some examples of numbers
// any integers, floats and NaN 

// Booleans: identify things in JS that will return false
// 0
// NaN
// undefined
// false
// null
// ""

// Everything else is true

//---- USING TYPEOF ----// 
// console.log(typeof undefined) // undefined
// console.log(typeof true) // boolean
// console.log(typeof Symbol("name")) // symbol
// console.log(typeof typeof 900719925124740998n) 

// What is a primitive data type? 
// a datatype that can only store a single piece of data

// Of the data types we went over, which one is not considered a primitive data type
// Object - non-primitive

// Why is an object not a primitive? 
// Can store collections of data

//---- OPERATORS ----//
// What do we use to assign values? x = y (assignment)
// x += y addition assignment, what is happening here?
// 1 + 1 // returns 2 
// "1" + 1 // returns 11, why is this happening?
// 3 == '3' // returns true
// 3 === '3' // returns false, strict equals
// x = 3: ++x returns 4 x++ returns 3

//---- DATATYPE GOTCHAS ----// 
// console.log(typeof ['Hello', 'World']) // object gotcha! array is not a datatype, it is a data structure
// console.log(0 == false) // true
// console.log(0 === false) // false
// console.log("" == 0) // true 
// console.log("" == "0") // false
// console.log(true + 1) // 2
// show students Number(true)
// console.log(false + false) // 0
// show students Number(false)
// console.log(typeof null) // object gotcha!
// console.log(typeof NaN) // number gotcha!

// Add/Subtract
// console.log("Thing" + 1); // "Thing1"
// console.log("Thing" - 1); // NaN

//---- VARIABLES ----//
// what is a variable?
// why do we use variables?

//---- Let vs Const ----//
// What is a good use case of let vs const?
// What is the difference between let and const

//---- Variable naming ----//
// what is wrong with the following variable
// let 1jedi = 'Yoda' // variables shouldn't start with numbers

// fix these
// let lukeskywalker = 'Luke Skywalker'
// let function = 'Darth Vader' // SyntaxError: Unexpected token 'break' / reserved key
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


//---- CONDITIONALS ----//

// Write a conditional 

// if (true) {
//     // return something
// } else {
//     // return something
// }

// if (condition) {
//     // return something
// } else if (condition){
//     // return something
// } else {
    // return something
// }

// ternary operator 

// (condition) ? true : false