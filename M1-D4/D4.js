/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function (l1, l2) {
    let areaofl1l2 = l1 * l2
    return areaofl1l2
}
// console.log(area(2,3))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (i1, i2) {
    if (i1 === i2) {
        let sum = i1 + i2
        sum = sum * 3
        return sum
    } else {
        let sum = i1 + i2
        return sum
    }
}

// console.log(crazySum(2,3))
// console.log(crazySum(3,3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19.
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function (n) {
    if (n <= 19) {
        let difference = 19 - n
        return difference
    }
    else {
        let difference = (n - 19) * 3
        return difference
    }
}

// console.log(crazyDiff(18))
// console.log(crazyDiff(19))
// console.log(crazyDiff(20))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = function (n) {
    if (n >= 20 && n <= 100) {
        return true
    }
    if (n == 400) {
        return true
    }
}
// console.log(boundary(19))
// console.log(boundary(20))
// console.log(boundary(100))
// console.log(boundary(101))
// console.log(boundary(400))

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
const strivify = function (string) {
    if (string.indexOf("Strive") === 0) {
        return string
    } else {
        let array = string.split(" ")
        array.unshift("Strive")
        return array.join(" ")
    }
}
// console.log(strivify("School"))
// console.log(strivify("Strive School"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const FirstCheck3and7 = function (positivenumber) {
    if (positivenumber % 3 == 0) {
        console.log( `${positivenumber} is a multiple of 3`)
    }
    if (positivenumber % 7 == 0) {
        console.log( `${positivenumber} is a multiple of 7`)
    }
}

// FirstCheck3and7(6)
// FirstCheck3and7(14)
// FirstCheck3and7(21)

// If a positive number (parameter) is a multiple of 3 and a multiple of 7 it is better to use console.log in the if clause instead of return. 
// For example: check3and7(21)
// If we want to use return we can use these codes

const SecondCheck3and7 = function (positivenumber) {
    if (positivenumber % 3 == 0 && positivenumber % 7 == 0) {
        return `${positivenumber} is a multiple of 3 and a multiple of 7`
    }
    else if (positivenumber % 3 == 0) {
        return `${positivenumber} is a multiple of 3`
    }
    else if (positivenumber % 7 == 0) {
        return `${positivenumber} is a multiple of 7`
    }
}

// console.log(check3and7(21))

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
const reverseString = function (string) {
    let j = 1
    let array = []
    for (i = 0; i < string.length; i++) {
        array[i] = string.slice(i, j)
        j++
    }
    let reversedArray = []
    j = 0
    for (i = string.length - 1; i >= 0; i--) {
        reversedArray[j] = array[i]
        j++
    }
    reversedString = reversedArray.join("")
    return reversedString
}
// console.log(reverseString("Strive"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
const upperFirst = function (string) {
    array = string.split(" ")
    const upArray = []
    for (i = 0; i < array.length; i++) {
        upArray[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1)
        // s.charAt(0).toUpperCase() + s.slice(1)
    }
    upString = upArray.join(" ")
    return upString
}
// console.log(upperFirst("This is a test"))


/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString = function (string) {
    newString = string.slice(1, string.length - 1)
    return newString
}
// console.log(cutString("Test"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
const giveMeRandom = function (n) {
    let array=[]
    for (i=0;i<n;i++){
        array[i]=Math.floor(Math.random() * 11); 
    }
    return array
}
// console.log(giveMeRandom(9))

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/