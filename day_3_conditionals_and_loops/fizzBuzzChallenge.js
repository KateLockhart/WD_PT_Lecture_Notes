//* Challenge:
//* Create a variable named FB that takes numbers
//* Write a conditional that: 
//* Prints out "Fizz" if the number is divisible by 3
//* Prints out "Buzz" if the number is divisible by 5
//* Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
//* Bronze: Write as a If else
//* Silver: Write as a Switch,
//* Gold: Write as a Ternary

// Bronze: If else


// Silver: Switch


// Gold: Ternary 

let FB = 30;

//If else
//for(i = 1; i <= 25; i++)

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
    } else if(FB % 3 == 0){
    console.log('Fizz'); 
    } else if (FB % 5 == 0){
    console.log('Buzz');
    } else {
    console.log(FB);
    }
   

// Switch
let FB = 20;
switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0) :
    console.log('Fizz Buzz');
    break;
    case (FB % 3 == 0) :
    console.log('Fizz');
    break;
    case (FB % 5 == 0) :
    console.log('Buzz');
    break;
    default:
    console.log(FB);
    break;
} 


// Ternary 
//for(let i=0;i<100;)
let FB = 18;
// console.log((FB%15?'':'Fizz Buzz')||(FB%3?'':'Fizz')||(FB%5?'':'Buzz')||FB)

(FB%15 === 0)
    ? console.log('Fizz Buzz')
    : (FB%3 === 0) ? console.log('Fizz')
    : (FB%5 === 0) ? console.log('Buzz')
    : console.log(FB)