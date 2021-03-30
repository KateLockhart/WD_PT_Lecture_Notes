// * Often we need to check multiple conditions, not just one, so we need more that just a single t/f result
// * If else and else if allow us to check a variable against multiple conditions to execute code

// IF ELSE
// If Else is used to check a condition but run a code block for either the met condition or if it does not meet the condition

let isOpen = false;

if (isOpen === true) {
    console.log('You can go inside, the door is open.')
} else {
    console.log('The door is not open to enter.')
};

let temp = 70;

if (temp >= 65) {
    console.log('Wow, what a nice day.')
} else {
    console.log('I need a sweater.')
};


// ELSE IF
// Else if is used to allow us to check more than two conditions
// Day 2 Challenge for another example

let temp = 68;

if (temp >= 80) {
    console.log('I know people are out there in shorts.')
} else if (temp >= 65) {
    console.log('This is t-shirt weather for most folks.')
} else if (temp >= 50) {
    console.log('You are going to need a sweater at least.')
} else {
    console.log('I am not leaving my house and you cannot make me.')
};

//* Think about real case uses for conditionals and making value comparisons 
let userName = "myUsername";
let password = "myPassword";

if (userName === "myUserName" && password === "myPassword") {
    console.log(`Welcome back, ${userName}. You're now logged in!`)
} else if (userName === "myUsername") {
    console.log('Your username is correct, but you have the wrong password.')
} else {
    console.log('This username and password is not in our database, do you need to sign up?')
};