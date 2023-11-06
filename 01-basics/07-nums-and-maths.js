const score = 400 //one way to declare.
//js detect this as number by default.

//if we are looking for specific number then we can declare in following way.
const topScore = new Number(400)//100% garenty this is number.
console.log(topScore)
//we can change this to string
console.log(topScore.toString().length)

console.log(topScore.toFixed(2))//used to give precision.

const otherNumber = 3345.687
console.log(otherNumber.toPrecision(5))//need to understand.

const hundreds = 100000000
console.log(hundreds.toLocaleString()) //seperate this with commas in US standard by default.

console.log(hundreds.toLocaleString('en-IN')) //seperate with indian standard.


//..........................Maths..............................................

// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.7))
// console.log(Math.min(4,5,6,7))
// console.log(Math.max(4,5,6,7))

console.log(Math.random())//output will be random between 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random() * 10) + 1)

//let find random number between the range of min and max.......................
const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min+1)+min))