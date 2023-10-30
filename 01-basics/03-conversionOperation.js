//Datatypes conversion

let score = "50"

console.log(typeof score);//one way to check the datatypes of variables.
console.log(typeof (score)); //another way we can write it as a method.
//output will be string.

//lets change that type in number or Int (conversion)................
let scoreInNumber = Number(score);

console.log(typeof (scoreInNumber));//output will be number.



//Another example...............................................
let score1 = "50abc";
console.log(typeof(score1));
//this will give output string.
//let's convert this into number.

let score1InNumber = Number(score1);
//let's do typeof
console.log(typeof(score1InNumber))//this will show number but in actual it is not.
//let's print it to check 
console.log(score1InNumber); //output will be NaN (Not a Number).
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

// boolean conversion output
//1 => true, 0 => false
//"" => false, "mahesh" => true
//undefined = false, null => false


//let's convert number into string.....................................
let someNumber = 7;

let strignNumber = String(someNumber);
console.log(typeof strignNumber);
console.log(strignNumber)



