var myName = "Kara"
var person1 = 'Josh'
var person2 = `Brenda`
let animal = "tiger"

const weather = "cloudy"
console.log("Weather", weather)

//weather = "rainy
//console.log("Weather Changed", weather)

// Case sensitive! Not the same bucket as myName
var myname = "Jeff"

console.log("My Name", myName)

//var myName = "Steve" < Not Needed

// Reassigning a variable we do not need to reinitialize the bucket
myName = "Steve"

console.log("My Name Changed", myName)

let phrase = "Good Morning"
//console.log(phrase, myName) works fine

//console.log(phrase + myName) no space
//console.log(phrase + " " + myName)

console.log(`${phrase} ${myName}, how are you`)

let example = "ThE FoX JUmpeD Over the Turtle"
console.log(example.toLowerCase())

let name1 = "Marco"

let name2 = "MaRcO"

let match = name1.toLowerCase() === name2.toLowerCase()

console.log("Do Names Match:", match)

console.log("Does Example have this word in it?" , example.includes("FoX"))

console.log("Length of Exammple:", example.length )