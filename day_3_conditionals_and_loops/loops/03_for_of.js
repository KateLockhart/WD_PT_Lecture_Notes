/* what makes for of better for arrays? what makes an array a more specific object?
- EXPLAIN difference between for in and for of loops
    - "iterable" meaning able to parse through with numbers. So it will grab the specific indices, and each value associated with that index.
    - enumerable just means the properties in the object can be counted - it will simply just count how many there are
*/

// For Of Loops - Iterates over an array(or iterable object) to parse through the array's indices: the numeric key of each value in the array(starts at 0) 

// Declare an object
let myDog = {
    name: 'Tiny',
    breed: 'Chihuahua mix',
    age: 10
}
//Does not work; object properties are not 'iterable', they're enumerable. So they can be counted but they don't have an numerical index like an array.
for (detail of myDog) {
    console.log(detail); // should be name height hobby isDev? Nope
} 

// Declare an Array
let hobbyArray = ['reading', 'camping', 'hiking', 'gaming', 'napping', 'coding'];

for (activity of hobbyArray) {
    console.log(`One of my hobbies is ${activity}.`);
};

// Another example:
let tiny = ['a chihuahua', 'a chucky 10 lbs', 'adorable'];
for (info of Tiny) {
    console.log(`Tiny is ${info}.`)
};


// * Questions?
// * Push notes to GitHub
// * Pull up calender & remind them week 2 videos are officially now assigned and due by the start of next class
// * Inform that Terminal Dungeon and CSS creature will be graded by the end of this week(I'll do it Paul haha)