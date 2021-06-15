greeting();

function greeting() {
    // CODE GETS EXECUTED WHEN THE FUNCTION IS CALLED
    console.log("Hello from greeting");
}



// FUNCTIONS WITH EXPRESSIONS
// ORDER MATTERS 
// The key difference between the function expression and the function declaration is...
// declarations get hoisted
// expressions do not

let greetingExpression = function() {
    console.log("Hello from greeting Expression");
};

greetingExpression();

// Create a function that, when invoked, lists out the numbers 1-10
// Use a For - Loop

// Create a function
// Don't forget to call the function
// Loop must be inside the function

function numberLoop () {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
};

// let number = function() {
//    for (let i = 1; i <= 10; i++){
//        console.log(i)
//    }
// };

numberLoop();

// PARAMETERS
// Function parameters are place holders or data that we pass into a function when calling or 'invoking' the function

function studentGreeting(name) {
    console.log(`Greeting ${name}`);
};
studentGreeting("Rob");
studentGreeting("George");

/*
Write a function that takes two parameters:
    one parameter is for a first name,
    the other parameter is for a last name;
    have them come together in a variable inside the funciton
    console.log 'Hello, my name is <your name>
    call or invoke your function
*/

function dynamicGreeting(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(`Hello, my name is ${fullName}`);
}

dynamicGreeting("Rob", "V");

function area(length, width) {
    let areaCalc = length * width;
    return areaCalc
}

let area1 = area(4, 10);
let area2 = area(2, 6);
console.log(area1, area2);

// Write a function that given the Length, Width, and Height return the volume of that Cuboid.
// Console.log the returned value

function volume(length, width, height) {
    let volumeCalc = length * width * height;
    return volumeCalc
};

let volume1 = volume(5, 6, 7);
console.log(volume1);

// Write a function that accepts a dog's age and returns a human age
// Console Log the returned value
// Formula to use: HumanAge = (DogAge - 2) * 4 + 21

function convertHumanToDogYears(dogAge) {
    let humanAge = (dogAge - 2) * 4  + 21;
    return humanAge
};

let roverAge = convertHumanToDogYears(3);
console.log(roverAge);
