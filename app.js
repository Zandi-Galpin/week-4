// Camel case naming
//const firstName = "Zandi"
// const lastName = "Galpin"
// const classCode = "SDV503"

// Declaring different variables of different data types
let city
console.log(city)
let firstName = "Zandi"
let lastName = "Galpin"
let country = "New Zealand"
let age = 21
let isStudent = true
console.log(firstName,lastName,country,age,isStudent)
// Declaring variables with number values
const gravity = 9.81
const boilingPoint = 100
const pi = 3.14159
console.log(gravity,boilingPoint,pi)
//variables can be declared on one line seperated by commas
let name = "Zandi",status = "cool",face = "handsome"
console.log("My name is",name,"and I am", status, "with a",face,"face!")
//TODO

/**
//SECTION Primitive data types means they are immutable (can't be changed):
- Numbers (7, 7.1, etc.)
- Strings (anything in single or double quotes)
- Booleans (true or false)
- Null (empty value or no value)
- undefined (a declared variable without a value)

//SECTION object references are mutable (can be changed), this means even if a const is an array, the data inside can still be changed:
- Objects
- Functions
- Arrays ////// e.g. let nums = [7,2,5] ////// nums[0] refers to the first item in the array (7)
 */
let nums = [1,2,3]
nums[2] = 10
console.log(nums)