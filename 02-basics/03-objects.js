//singleton

// object literals

//its about creating symbol and add it to object key
const mySymb = Symbol("key1")

const JsUser = {
    name: "Mahesh",
    "full name": "Mahesh Bist",
    age: 18,
    [mySymb]: "mykey1",//this is how to add to the obj keys.
    location: "Jhalari",
    email: "bistmahesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name) //we can extract like this but this is not good way.

console.log(JsUser["email"])
console.log(JsUser["full name"])

//to call symbol we do same as other
console.log(JsUser[mySymb])

//to change the value of object
JsUser.email = "mahbist@gmail.com"
console.log(JsUser["email"])

//to lock the values of object or whole object..........
// Object.freeze(JsUser)

//let's check after freezing object
// JsUser.name = "munna"
// console.log(JsUser.name)//not changed.

// console.log(JsUser)//to call all values of the object

//let's create greeting function for JsUser

JsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(JsUser.greeting());

//let's do it differently
JsUser.greetingOne = function () {
    console.log(`Hello JS User ${this.name}`)
}

console.log(JsUser.greetingOne());

//note: mostly fetch object value with objectname.valuekey


