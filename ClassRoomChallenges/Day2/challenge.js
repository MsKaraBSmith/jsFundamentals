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

if(myName.length > myFriendsName.length){
    console.log(`${myName} is longer than ${myFriendsName}.`)
} else {
    console.log(`${myFriendsName} is longer than ${myName}.`)}

if (myName.length > myFriendsName.length) {
    console.log(`My name is longer than ${myFriendsName}'s by ${myName.length - myFriendsName.length} letters.`)
} else if (myName.length < myFriendsName.length) {
    console.log(`${myFriendsName}'s name is longer than mine by ${myFriendsName.length - myName.length}.`)
} else {
    console.log('Our names are the same length.')
}



if (myName.length < 6) {
    console.log(`${myFriendsName}'s name is longer than my name.`)
}
