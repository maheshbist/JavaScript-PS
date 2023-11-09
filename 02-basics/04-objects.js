const tinderUsr = {}//this is non singleton(literal)
console.log(tinderUsr)

//singleton
const tinderUser = new Object()//this is singleton

tinderUser.id = "123abc"
tinderUser.name = "mahesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com ",
    fullname: {
        username:{
            firstname: "mahesh",
            lastname: "bist"
        }
    }

}
console.log(regularUser)//output: SHOWS ALL THE ELEMENT INSIDE OBJECT OR SHOWS OBJECT INSIDE OBJECT

//IF WE WANT TO DRILLDOWN THEN
console.log(regularUser.fullname.username.firstname)


//TO COMBINE OBJECT TOGETHER THEN
const obj1 = {1: "a", 2: "b"}

const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1, obj2}//output will be objects inside object so
// console.log(obj3)

//so we have another way (best way to join objects)
const obj3 = Object.assign(obj1, obj2)
console.log(obj3)//it shows all in only one object.

//we use this more often
const obj4 = {...obj1, ...obj2}
console.log(obj4)

//array objects
const user = [
    {
        id: 1,
        email:"m@gmail.com"
    },
    {
        id: 2,
        email: "mb@gmail.com"
    }
]

console.log(user[1].email)//this is how we thrack them.

//while using database we use forllowing way.
console.log(Object.keys(tinderUser));//to get onject using key.

console.log(Object.values(tinderUser))//to get object using value.

console.log(Object.entries(tinderUser))//to insert object inside arrary as array.

//to check before we fetch the value.
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//OBJECT DESTRUCTURING (to reduce something we use more often)
//like course.courseInstructor

const{courseInstructor} = course
console.log(courseInstructor)//that's it and we get result.
//or we can shorten it more further.
const{courseInstructor:Instructor} = course
console.log(Instructor)//just changed the name of courseInstructor.

//API's  (carries objects in json format.)
//Jsons example:
{
    "name" = "mahesh",
    "coursename" = "js in hindi",
    "price" = "free"
}


//
{
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Jennie",
                "last": "Nichols"
            },
            "location": {
                "street": {
                    "number": 8929,
                    "name": "Valwood Pkwy",
                },
                "city": "Billings",
                "state": "Michigan",
                "country": "United States",
                "postcode": "63104",
                "coordinates": {
                    "latitude": "-69.8246",
                    "longitude": "134.8719"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "jennie.nichols@example.com",
            "login": {
                "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
                "username": "yellowpeacock117",
                "password": "addison",
                "salt": "sld1yGtd",
                "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
                "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
                "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
                "date": "1992-03-08T15:13:16.688Z",
                "age": 30
            },
            "registered": {
                "date": "2007-07-09T05:51:59.390Z",
                "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
                "name": "SSN",
                "value": "405-88-3636"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/75.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
        }
    ],
        "info": {
        "seed": "56d27f4a53bd5441",
            "results": 1,
                "page": 1,
                    "version": "1.4"
    }
}

