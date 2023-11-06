
//  Primitive Data Types
//  7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 //number
const scorevalue = 100. //number and there is no float or decimal only number.
const isLoggedIn = false //Boolean
const outsideTemp = null //null
let userEmails; //undefined
// or
let userEmail = undefined //undefined

const bigscore = 999999999999999999999999999999n;//bigint

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)//output false
//symbol create unique value even if value description is same.

// Example
const obj = {};

obj[id] = 'Value for id symbol';
obj[anotherId] = 'Value for anotherId symbol';

console.log(obj); // Output: { [Symbol(123)]: 'Value for id symbol', [Symbol(123)]: 'Value for anotherId symbol' }



//  Reference(Non-Primitive)................................................
//  Array, Objects, Functions

//Array
const heros = ["salmankhan", "sarukhkhan", "amirkhan"]
console.log(heros)//should show array list.

//Objects
// curly brackets bhitra object hunxa.
let myObj = {
    name:"mahesh",
    age:25,
}
console.log(myObj)//should show all objects.

//function
const myfunction = function(){
    console.log("Hello World")
}


//https://262.ecma-international.org/5.1/#sec-11.4.3
//this link is for javascript documentation.