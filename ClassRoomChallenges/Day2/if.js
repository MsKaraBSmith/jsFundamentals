/* 
CONDITIONALS - Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. Conditionals will check if an expression is true. IF the expression is true, a block of code will run.
*/

/* 
Falsy Values - considered false.

1) false
2) null
3) undefined
4) 0
5) NaN (Not a number)
6) " " (empty string)
*/

/* 
Truthy Values - considered true .

1) true
2) number that isn't zero: 42, -42
3) "0"
*/

let snowing = true;

if (snowing == true){
    console.log('It is snowing outside!');
}

if (snowing) {
    console.log('It is still snowing!');
}

let snowing = false;
if (snowing == false) {
    //true
    console.log(`It stopped snowing. It's too warm.`);
}

if(snowing) { //false! So it will not run
    console.log('It is not snowing. Bummer!');
}

/* 
IF ELSE - If the expression is false, it will run the next block of code. The else statement specifies a block of code to be executed if the condition is false.
*/

let puppies = 3;
if (puppies < 1) {
    console.log('I need more puppies.');
}
    else {
        console.log('I have enougth puppies!');
    }

let myName = "Taylor";

if (myName == "Marco") {
    console.log(`Hello!! My name is ${myName}.`);

} else {
    console.log(`Hello, is your name ${myName}.`);
}

/*
Challenge!

BRONZE

Write two variables. One will store you name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.

SILVER

Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log whose name is longer. Example Result: My name is longer than Adam's.

GOLD

In the console log include how many letters difference there are between the names. Example Result: Adam's name is shorter than mine by 4 letters.
There is also on additional cas that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let myName = "Kara";
let myFriendsName = "Amanda";

console.log(myName.length);
console.log(myFriendsName.length);

console.log(`${myFriendsName} is a longer name than ${myName}.`);

console.log(`${myFriendsName} is longer than ${myName} by 2 letters.`)

if (myName.length < 6) {
    console.log(`${myFriendsName}'s name is longer than my name.`)
}