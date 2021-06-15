let animals = ['pig', 'cow', 'duck', 'horse'];




for(animal of animals){
    // code that gets executed in the loop
    console.log(animal)
}


let numbers = [4,5,10,20];
let sumOfAllNumbers = 0;

for(number of numbers){
    //console.log(number);
    sumOfAllNumbers = sumOfAllNumbers + number
}

console.log(sumOfAllNumbers)

/*BRONZE

-Using a for of loop console.log the name of each pie from the pies array

*/

/*SILVER
    -Have the conditional check if EACH pie from the pies array is of the type 'apple'.
    -If it is of type console log __ pie is of type apple otherwise
    console log __ pie is not of type apple

    -Use google to search for an array method that checks if an array includes a certain value
 */

/*GOLD

-Nest a conditional inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' -ie
apple pie is a fruit pie/ chocolate peanut butter pie is not a fruit pie.
Then, using string interpolation, console.log either 'the __ pie is a fruit pie!' or 'the __ pie is not a fruit pit :('
 */

let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry', 'cherry apple', 'oreo', 'chicken pot', 'shepherd']

for (pie of pies){
    console.log(pie);
}


for(pie of pies){
if (pie.includes('apple')){
    console.log('apple')
} else {
    console.log('not apple')
}
}

for(pie of pies){
    if(
        pie.includes('apple') ||
        pie.includes('blueberry') ||
        pie.includes('cherry') ||
        pie.includes('lemon') ||
        pie.includes('peach')
    ){
        console.log(`${pie} pie is a fruit pie!`)
    } else {
        console.log(`${pie} pie is not a fruit pie :(`)
    }
}
