// * so we know conditionals are very useful but take up a lot of lines to code
// * a concise way to write a conditional statement is using a ternary, it's like a shortcut for an if/else

// Ternary Statement - a concise way to check two(or more) conditions using the syntax of ? and :
// Ternary structure:
// (condition) ? (codeToRunIfTruthy) : (codeToRunIfFalsy)

let temp = 70;

// Ternary:
(temp > 75) ? console.log('Indiana summer temps') : console.log('Indiana spring temps');

// Instead of:
if (temp > 75) {
    console.log('Summer');
} else {
    console.log('Spring');
};

// Checking more than two conditions example: 
let num = 13;

// Else If statement
if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Number is 0");
};

// Ternary Statement
(num > 0) ? console.log("Positive number") : (num < 0) ? console.log("Negative number") : console.log("Number is 0");

// Can also be written on multiple lines if easier to read:
(num > 0) ? console.log("Positive number")
    : (num < 0) ? console.log("Negative number")
    : console.log("Number is 0")