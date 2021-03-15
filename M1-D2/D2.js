
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

// when you ask a person who are you? He or she will tell his or her name. his or her name is a string. so we can store it in JavaScript as a string.
// when you ask a person who old are you? He or she will tell his or her age. his or her age is a number. so we can store it in JavaScript as a number.

// Imagine you went to the bar and asked them for a bottle of beer

// The shopkeeper could say if you are over 21, YES (the answer is yes, which means true, you can buy a bottle of beer)
// The shopkeeper could say if you are under 21, NO (the answer is no, which means false, you can't buy a bottle of beer)
// These "true or false" are boolean datatypes, for example we can use them to see if someone is eligible to do something or not. 
// If you have a driving lisence (true) you can drive 
// If you don't have a driving lisence (false) you cannot drive 


// Assume You want a money and I check my wallet and see there isn't any money there. In this case there is a wallet but no money in there (undefined) 
// undefined --> absence of value

// Imagine You want a money and I don't have money and I don't have any wallet.
// null --> not existing

// ***********************************************************************
/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

// variable is a place where you can store information. For example texts (messages) or numbers (contact numbers) ...

// ***********************************************************************
/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
console.log(12+20) //32

// ***********************************************************************
/* EXERCISE 4
Create a variable named x containing the number 12.
*/
let x=12

// ***********************************************************************

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name="John Doe"


// ***********************************************************************

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/
 
console.log(12-x) //0
// ***********************************************************************

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1="john"
let name2="John"
console.log(name1===name2) //false
console.log(name1.toLowerCase()===name2.toLowerCase()) //true

// ***********************************************************************

/* EXERCISE 8
Create a variable named y (its value must be less than 10). Write the code to print the literal value of y (ex.: if y is 1 print "one", if 5 print "five" etc.).
*/
let y=6;
if (y===0){console.log("zero")}
else if (y===1){console.log("one")}
else if (y===2){console.log("two")}
else if (y===3){console.log("three")}
else if (y===4){console.log("four")}
else if (y===5){console.log("five")}
else if (y===6){console.log("six")}
else if (y===7){console.log("seven")}
else if (y===8){console.log("eight")}
else if (y===9){console.log("nine")}
else if (y===10){console.log("ten")}
else{console.log("y is greater than 10")}
// ***********************************************************************

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/
// if (condition)
// result = 'something';
// else
// result = 'somethingelse';

// result = (condition) ? 'something' : 'somethingelse';

// If...Else
if (age >= 21)
result = 'Beer';
else
result = 'Juice';

// Ternary Operator
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"
console.log("-------------------")

let hisname="john"
console.log(age >= 21 && hisname=="john" ? "Beer" : "Juice")
// ***********************************************************************

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/