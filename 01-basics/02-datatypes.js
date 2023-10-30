"use strict"; //treat all JS code as newer version.

// alert("Hello Mahesh"); 
//This will popup new small window to show the output.
//also we are using node js not browser.

//note: install code prettier extension for code readability.

console.log("Mahesh");

// datatypes..(Premitive datatypes).............................................

// number => 2 to power 53;
//bigint
//string  (we can use it in single quot like 'mahesh' or doule quot like "mahesh")
//boolean => this is either true or false.
//null => standlone value (it is also called datatypes.) this means empty like nothing.
//undefined => when we don't define the value in the variable then it is undefined.
//symbol => to show the uniqueness on the component creation during react.

// beside this we have.....................................
//objects

let name = "mahesh"
let age = 27
let isMature = true
let address//this will act as undefined.


//How to check datatypes......(using typeof)............................
//we have typeof to check the datatypes.

console.log(typeof age);
//or we could do same for static data
console.log(typeof "mahesh"); //type string

console.log(typeof undefined) //undefined

console.log(typeof null) //the output will be object.
//note: either it is langaug error or it is okey. never tried to find logic.
