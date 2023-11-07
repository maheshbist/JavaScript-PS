//array
//note: array could store multiple datatype's values like below

const myArrExample = [0,1,2,3,4, true, "mahesh"] 

const myArr = [1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]

//another way to declare array................
const myArr2 = new Array(1,2,3,4,5)//no need to give square bracket.
console.log(myArr[0])
console.log(myHeroes[1]) //baiscs

//Array Methods.....................................................

 myArr.push(6)//it will add element to the array.
 console.log(myArr)

 myArr.pop()//it will remove last element from the array and don't need to give argument.
 console.log(myArr)

 myArr.unshift(9)//insert the new element at the start of arrary and return new length.
console.log(myArr[0])//In 0 index we will get 9 the initial one.

myArr.shift()//remove the first element of array.
console.log(myArr)//no need to give any argument.

console.log(myArr.includes(9))//it check 9 is in the array or not and return boolean datatype.

console.log(myArr.indexOf(3));

//another interesting thing to know about join....................
const newArr = myArr.join()
console.log(myArr)//output: comes inside squear bracket with datatype array.

console.log(newArr)//changed array to string type. this is no more array.
console.log(typeof(newArr))//string output


//slice, splice

console.log("A ", myArr) //we could do this as well.
//output will be like : A  [ 1, 2, 3, 4, 5 ]


//slice: element between the mentioned index without including the last mentioned index..
const myn1 = myArr.slice(2,4)
console.log("B", myArr)//output: start from index 2 and get all before 4th index..


//splice: remove array starts from index 2 to 4. also we can replace as well.
const myn2 = myArr.splice(2,4)
console.log("C", myArr)
console.log(myn2)

// difference between slice and splice in array
//slice doesn't bring any changes on original array and does not contain last mentioned index.
//for splice it remove all array element from starting index to mentioned number.
//for index we can replace the indexes with new element no matter they are of different datatypes.

