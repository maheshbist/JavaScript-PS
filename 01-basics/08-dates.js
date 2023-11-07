let myDate = new Date()
console.log(myDate)//with give local (nepali time and english date)

//Date conversion
console.log(myDate.toString())//date to string

console.log(myDate.toDateString())// will give just date and day.

console.log(myDate.toLocaleString())

console.log(typeof(myDate))//typeof for date is object always like null.

//let do it with specific satic date...............................
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())

//another way...................................................
let newCreatedDate = new Date(2023, 0, 24, 5, 9)
console.log(newCreatedDate.toLocaleString())//output: 1/24/2023, 5:09:00 AM

//note: months starts from 0 that means 0 means january.

//another way using yyyy-mm-dd.......................................
let anotherNewDate  = new Date("2023-01-23")
console.log(anotherNewDate.toLocaleString())//output is 1/23/2023, 5:45:00 AM

//let's get specific time form anotherNewDate
console.log(anotherNewDate.getTime());//also we get time in milisecond.
//let's make it in seconds
console.log(Math.floor(anotherNewDate.getTime()/1000))//output will be in seconds.
//timestamp 

let myTimestamp = Date.now()
console.log(myTimestamp);

//to find months, year, days and other

let otherDate = new Date()
console.log(otherDate)
console.log(otherDate.getMonth())//output: 10 and it starts with 0.
console.log(otherDate.getDay())// output 1: will be monday because it starts with 0.
console.log(otherDate.getFullYear())

//if you don't want it to start from 0 then we can add 1 to get exact value................
console.log(otherDate.getDay()+1);

console.log(otherDate.getMonth()+1);//output will be exact. jan 1 feb 2 this way......

//we can do string interpolation as well to date......................
console.log(`the daty is ${otherDate.getDay()+1} and time is ${otherDate.getTime()}`)

//also we can customize toLocaleString
let customizeDate = otherDate.toLocaleString('default', {
    weekday: "long",
    year: "2-digit"
})

console.log(customizeDate)

