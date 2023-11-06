console.log('Hello Mahesh')
console.log("Hello Mahesh")
//we can use single as well as double quot for string as mentioned above.

const name = "Mahesh"
const repocount = 80

// console.log(name+ ' have ' + repocount + " repocount") //one way to concat.

//backtick(``) (using string interpertation `${}`)...........................
//this whole this we call it string interpolation (`Hello ${}`) 
console.log(`${name.toUpperCase()} have ${repocount} repocount`)// another way to concat.
//and this one is the best way to concate the string.

//another way to decalare string...............................................
//we do this only if we only need string type.
const gameName = new String('Mahesh')

console.log(`${gameName.length}`)//to check length.
console.log(gameName.__proto__)//to check wether it is object or not.

console.log(gameName.charAt(3))//check character at index.
console.log(gameName.indexOf('h'))//check the index of character

//we can do like this as well.
const newString = gameName.substring(1,4)//cannot give negative values.
console.log(newString)

const anotherString = gameName.slice(0,4)//can give negative values. as well
console.log(anotherString)

const anotStringOne = "    Mahesh    "
console.log(anotStringOne)
console.log(anotStringOne.trim())

const url = "https://mahesh.com/mahesh55tutor"

console.log(url.replace('mahesh', 'maheshbist'))

console.log(url.split('/'))//this will make variable to array with seperator.



