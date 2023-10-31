//Datatypes conversion

let score = "50"

console.log(typeof score);
//one way to check the datatypes of variables.

console.log(typeof (score)); 
//another way we can write it as a method....
//output will be string.....

//lets change that type in number or Int (conversion)................
let scoreInNumber = Number(score);

console.log(typeof (scoreInNumber));//output will be number.



//Another example...............................................
let score1 = "50abc";
console.log(typeof (score1));
//this will give output string.
//let's convert this into number.

let score1InNumber = Number(score1);
//let's do typeof
console.log(typeof (score1InNumber))//this will show number but in actual it is not.
//let's print it to check 
console.log(score1InNumber); 
//output will be NaN (Not a Number).

//Note: NaN means Not a Numebr : this is also a kind of data type.

// Output of conversions............................................
//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => undefined

//let's convert boolean............................................
let isLoggedIn = null //this is number type

let isLoggedInBool = Boolean(isLoggedIn);
console.log(isLoggedInBool)//output will be true.
//Note: So we can convert 1 into bool true and 0 into false.

// boolean conversion output.........................................
//1 => true, 0 => false
//"" => false, "mahesh" => true
//undefined = false, null => false


//let's convert number into string.....................................
let someNumber = 7;

let strignNumber = String(someNumber);
console.log(typeof strignNumber);
console.log(strignNumber)


//***********************Operation**********************************

// console.log(2 + 2) //2 plue 2
// console.log(2 - 2) //2 minus 2
// console.log(2 * 2) //2 multiply 2
// console.log(2 ** 3) //2 to the power 3
// console.log(2 / 2) //Divide
// console.log(2 % 2) //remainder

//To get negative value..........................................
let value =  3
let negValue = -value
console.log(negValue);


//other operation.................................................
console.log(1+2)//we can add like this
console.log("Mahesh"+" Bist")//we can do like this as well

console.log("1" + 2) //this should no work but workig.
console.log(1 + "2") //same for this as well.

console.log("1"+2+2) //this doesn't work same.
//because js convert initial operation not later on operations. 
//it will treat them as string eventhough they are not string.

//but here comes twists.
console.log(1+2+"2") //output 32? . and this is not working like previously

console.log(+true)//output will be 1.
//because nothing + 1 is one (because true is converted into 1)

//but we cannot do this.
// console.log(true +)

console.log(+"")//output is 0 
//becasue nothing + 0 is 0.

//Note do not do like these above operations.
//Note: we cannot be dependent on these kind of operations. these make no sense.

//Using Parenthesis........................................................
console.log(3+2*5/2) //we cannot do operations like this.
//use parenthesis like below.
console.log((3+2)*(5/2)) //this is correct way.

//this way is also not suitable way. use alternet way.........................
let num1, num2, num3
num1=num2=num3 = 2+2
console.log(num2)

//prefix and profix..........(increment operator)......................................
let gameCounter = 100
gameCounter++//postfix
//this will increase the value.
//we can get the same using prefix as well but this is not the same.
// ++gameCounter//prefix.

console.log(gameCounter)
//check this below sentence in google.
//prefix and postfix js mdn

//let's do the example. 
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//need some more research.


