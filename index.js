// DATA TYPES -------------------------------------------
// Go over different data types:
// 8 basic data types in JS 
// String
// Number 
// Boolean
// BigInt
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

// What is a primitive data type
// Of the data types we went over, which one is not considered a primitive data type

// VARIABLES -------------------------------------------
// what is a variable? 
// why do we use variables?


// Variable naming best practices
// what is wrong with the following variable
// let 1jedi = 'Yoda' // variables shouldn't start with numbers

// fix these
// let lukeskywalker = 'Luke Skywalker'
// let break = 'Darth Vader' // SyntaxError: Unexpected token 'break' / reserved key
// const counter = 0
// console.log(++counter)


// READING ERRORS -------------------------------------------
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