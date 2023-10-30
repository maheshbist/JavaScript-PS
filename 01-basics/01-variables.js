const accountId = 66676
let accountEmail = "bistmahesh333@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"
let accountState
var accountCountry


// accountId = 9 
//this is not allowed. because we cannot change the value of const.

console.log(accountId);

/*
Prefer not to use var 
bacause of issue in block scope and functional scope
generally scope means "{}" whereever it comes that means we are using scope.
*/

//one more note: why we don't use var because when we change the value of var then it changes 
//initial value we have assigned to var so it doesn't have the control to change the value.

accountEmail = "maheshbist@gmail.com"
accountPassword = "4444"
accountCity = "Pokhara"

//there will so much conole.log to write so let's choose different way.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountCountry]);

//if we don't assign value in let variable then it shows undefined variables. same for var as well it will show undefined.

//Note: if we have something error with variable or it's value then we generally get object anonymous error.
 


