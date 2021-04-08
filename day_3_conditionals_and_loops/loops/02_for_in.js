// For In Loops - wonderful for iterating over values in an Object
// Objects are collections of properties(keys) and their values; for in loops iterate over the object's enumerable('countable') properties

// Declare an object
let myDog = {
    name: 'Tiny',
    breed: 'Chihuahua mix',
    age: 10
}

// item can be named anything, it's a new variable term that we use to title each counted(enumerable) object property
for (item in myDog) {
    console.log(item);
    console.log(myDog[item]);
}

// Another example:
let object = {
    name: 'Kate',
    height: 66,
    hobby: 'hiking',
    isDev: true
};

for (property in object) {
    console.log(`${property}: ${object[property]}`)
};

// Declare an Array
let hobbyArray = ['reading', 'camping', 'hiking', 'gaming', 'napping', 'coding'];

for (activity in hobbyArray) {
    console.log(activity);
    console.log(hobbyArray[activity])
};

//Can use for in loop with an array because an array is an object, but a for of loop is better practice
//* continue to for of