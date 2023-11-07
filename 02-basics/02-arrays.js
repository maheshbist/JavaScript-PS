const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//push
// marvel_heros.push(dc_heros)

console.log(marvel_heros)//output will be array inside array.
//output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//concat
let newheroes = marvel_heros.concat(dc_heros)
console.log(newheroes);//output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//output comes as new array

// spread oprator in array..............................................
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)//output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// flat: it bring all into one single array.
const another_array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]

const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr)

//conversion of string into array.
console.log(Array.from("Hitesh"))
// console.log(Array.from({name:"mahesh"}))//interesting

//we can convert like this also.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

let name = "Mahesh"
console.log(Array.from(name))

//of used if we have to put one variable as one array element
//from used if we have to put on variable as multiple element of array.