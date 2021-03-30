// * some conditional statements suit certain situations, another option is the switch
// * some people love switches and some find them to be too much code, feels 'clunky' when there are more concise alternatives
// * switches are still good to know and use in certain cases

// Switch Statements - execute a block of code depending on different "cases", uses a : and break keyword to determine what code is ran after matching a case
// Switch statement often uses a break or default keyword(or both)
// Break - breaks out of the switch once it meets a case, stops executing more code/cases, can add a break after multiple cases(multiple cases execute the same code)
// Default - if no cases match, this provides 'default' code to run if no cases are met. It is optional(not required for switch to function), but is best practice to use.

let favColor = 'green';

switch (favColor) {
    case 'red':
        console.log('Red like a rose.');
        break;
    case 'green':
        console.log('Green like the forest.');
        break;
    case 'blue':
        console.log('Blue like the sky.');
        break;
    default: 
        console.log(`${favColor} is beautiful too.`);
        break;
}

let doYouLikePizza = 'yeah';

switch (doYouLikePizza) {
    case 'yes':
    case 'yeah':
    case 'duh':
        console.log('Me too! I love pizza.');
        break;
    case 'no':
    case 'nah':
    case 'nope':
        console.log('Oh... I order something else for dinner then.');
        break;
    default:
        console.log('I cannot tell if that is a yes or no...');
        break;
}