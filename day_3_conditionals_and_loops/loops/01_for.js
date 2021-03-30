/*   - There are many different kinds of loops but they all do roughly the same thing:
        - it will repeat until a specified condition evaluates to false
            - For statement*
            - Do while statement
            - While statement
            - Labeled statement
            - Break statement
            - Continue statement
            - For in statement*
            - For of statement*
*/ 

/*
- Loops - a quick and easy way to iterate to "loop" over something, to do something repeatedly
- Many types of loops, but they all repeat until a specified condition evaluates to false

- We can create infinite loops, to break the loop use:
    Ctrl + C to stop loop, or close VSC(more hassle to reopen)

- Loops take in three parameters divided by the semicolon :
    1. initial expression
    2. condition
    3. increment expression
*/

let i = 7;
console.log('Line _ console.log', i);

//    (1) ;  (2)  ; (3)
for (i = 0; i < 10; i++) {
    console.log(i); // will result 0 1 2 3 4 5 6 7 8 9
}
//* what about <= 10? or i = 5 or decrease by 1 each time
//* for has a hidden increment at the very end
console.log('Global variable: ', i);

//* have them do quick challenge
// Quick Challenge: use a for loop to count to 20, but by 2's
for (let i = 0; i <= 20; i += 2) { // i = i + 2
    console.log(i); // 0 2 4 6 8 10 12 14 16 18 20
}
//* what if we want to decrease by 2's?

// Printing each letter to the console with loop
let word = "Fantastic";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

/*
CHALLENGE
************

    - make a for loop where you add up all the numbers from 1 to 25 (should equal 325)
*/
let sum = 0;

for (let i = 1; i <= 25; i++) {
    sum += i;
}

console.log(sum); //325

//*word[i] is needed or the value of the letters index is the string is printed versus the letter

//*lead into for in/of loops