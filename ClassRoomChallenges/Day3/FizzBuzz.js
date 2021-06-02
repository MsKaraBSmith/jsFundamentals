// ******* CHALLENGES ********

//*************************
//FIZZ BUZZ (Conditionals Only)
//************************* */

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that:
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" is the number is divisible by 5
    Prints out "Fizz Buzz" is the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a Ternary
*/

let fb = 0;

for (fb = 0; fb <= 100; fb++){
    if (fb % 3 === 0 && fb % 5 === 0){
        console.log("Fizz Buzz");
    }
    else if (fb % 5 === 0) {
        console.log("Buzz");
    }
    else if (fb % 3 === 0) {
        console.log("Fizz");
    }
    else {
        console.log(fb);
    }
}

let FB = 22;

if(FB % 3 === 0 && FB % 5 === 0){
    console.log("Fizz Buzz");
} else if (FB % 5 === 0){
    console.log("Buzz");
} else if (FB % 3 === 0){
    console.log("Fizz");
} else {
    console.log("Your number is not divisible by 5 or 3");
}

let FB = 30;

//Switch
switch (true) {
    case (FB % 3 === 0 && FB % 5 ===0):
        console.log("Fizz Buzz");
        break;
    case (FB % 5 === 0):
        console.log("Buzz");
        break;
    case (FB % 3 === 0):
        console.log("Fizz");
        break;
    default:
        console.log("Your number is not divisible by 5 or 3")
}

//Ternary
let FB = 30;
(FB % 3 === 0 && FB % 5 ===0) ? console.log("Fizz Buzz") :
(FB % 5 === 0) ? console.log("Buzz") :
(FB % 3 === 0) ? console.log("Fizz") :
console.log ("Your number is not divisible by 5 or 3")

