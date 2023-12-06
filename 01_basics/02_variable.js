// let, const, var
const accountId= 200104011
let accountEmail="anchalshaurya20@gmail.com"
var accountPassword="123456"
accountHolderName= "Anchal Sharma"
let account;

// accountId=24   //Error: Cannot be reassigned after declaration.
console.log(accountId);


accountEmail="anchal@gmail.com"
accountPassword='666'
accountHolderName="Anchal"


console.log(accountEmail)
console.log(accountPassword)
console.log(accountHolderName)


console.table([accountId,accountEmail,accountPassword,accountHolderName, account])


/*
var
======
    Function-scoped or globally scoped, not block-scoped.
    Can be redeclared and reassigned.
    Hoisted to the top of the function or global context, so you can use the variable before it's declared in the code.


    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // Outputs 20
    }
    console.log(x); // Outputs 20

*/

/*
let
=======
    Block-scoped (limited to the block where it is declared).
    Can be reassigned, but not redeclared in the same scope.
    Not hoisted to the top of the block, so you can't use the variable before it's declared.

    let y = 10;
    if (true) {
        let y = 20;
        console.log(y); // Outputs 20
    }
    console.log(y); // Outputs 10


*/