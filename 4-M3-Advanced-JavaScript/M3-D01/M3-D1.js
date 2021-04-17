/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (p1, p2) => {
    if (p1 === p2) { return (p1 + p2) * 3 }
    else {
        return (p1 + p2)
    }
}

// console.log(sum(3,4))
// console.log(sum(4,4))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const check = (p1, p2) => {
    if (p1 === 50 || p2 === 50 || (p1 + p2) === 50) {
        return true
    }
}
// console.log(check(30,10))
// console.log(check(50,20))
// console.log(check(30,50))
// console.log(check(30,20))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const remove = (string, character) => {
    let newstring = ""
    let j = 0
    for (let i = 0; i < string.length; i++) {
        if (i != (character - 1)) {
            newstring += string[i]
            j++
        }
    }
    return newstring
}

// console.log(remove('This is test', 6))

/*
4)
 Create a function to find the largest of three given integers.
*/
const largest = (p1, p2, p3) => {
    let largest = p1
    if (p2 > largest) {
        largest = p2
    } else if (p3 > largest) {
        largest = p3
    }
    return largest
}

// console.log('remove:', largest(14, 16, 15))

// another way:

// const largest = (p1, p2, p3) => {
//     let largest
//     if (p1 > p2 && p1 > p3) {
//         largest = p1
//     } else if(p2 > p1 && p2 > p3) {
//         largest = p2
//     } else if(p3 > p1 && p3 > p2) {
//         largest = p3
//     }
//     return largest
// }

// console.log('remove:', largest(10,12,3))


/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const range = (p1, p2) => {
    if (p1 > 40 && p1 < 60 && p2 > 40 && p2 < 60) {
        console.log(p1, 'and', p2, 'is in range 40..60')
    }
    else if (p1 > 70 && p1 < 100 && p2 > 70 && p2 < 100) {
        console.log(p1, 'and', p2, 'is in range 70..100')
    }
    else {
        console.log(p1, 'and', p2, 'are neither in the range 40..60 nor range 70..100')
    }
}
// range(45,55)
/*
6)

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const copystring = (string, number) => {
    let newstring = ""
    for (let i = 0; i < number; i++) {
        newstring += string
    }
    return newstring
}
// console.log(copystring("test ", 6))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName = (city) => {
    if (city.indexOf("Los") == 0 || city.indexOf("New") == 0) {
        return city
    }
    else {
        return ""
    }
}
// console.log(cityName("NewYork"))
// console.log(cityName("LosAngles"))
// console.log(cityName("London"))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumArray3elements = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

// console.log(sumArray3elements([5,9,4]))

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3.
*/

const testArrayContains1or3 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1 || array[i] == 3) {
            return `array contains 1 or 3`
        }
    }
    return `array doesn't contain 1 or 3`
}

// console.log(testArrayContains1or3([2,5]))
// console.log(testArrayContains1or3([2,3]))

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

const testArrayNotContains1or3 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1 || array[i] == 3) {
            return `array contains 1 or 3`
        }
    }
    return `array doesn't contain 1 or 3`
}

// console.log(testArrayNotContains1or3([2, 5]))
// console.log(testArrayNotContains1or3([2, 3]))

/*
11)
Create a function to find the longest string from a given array of strings.
*/
const longestStringFromArray = (array) => {
    let longeststring = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longeststring.length) {
            longeststring = array[i]
        }
    }
    return longeststring
}

// array = ["diego", "luis", "ubeyt", "stefano"]
// console.log(longestStringFromArray(array))

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const findTypesOfAngle = (angle) => {
    if (angle > 0 && angle < 90) {
        return `Acute angle`
    } else if (angle == 90) {
        return `Right angle`
    } else if (angle > 90 && angle < 180) {
        return `Obtuse angle`
    } else if (angle == 180) {
        return `Straight angle`
    }
    return `${angle} is neither 'Acute angle' nor 'Right angle' nor 'Obtuse angle' nor 'Straight angle'`
}
// console.log(findTypesOfAngle(0))
// console.log(findTypesOfAngle(45))
// console.log(findTypesOfAngle(90))
// console.log(findTypesOfAngle(135))
// console.log(findTypesOfAngle(180))

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
const findIndexofGreatestElement = (array) => {
    let greatestElement = array[0]
    let IndexofGreatestElement = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > greatestElement) {
            greatestElement = array[i]
            IndexofGreatestElement = i
        }
    }
    return IndexofGreatestElement
}
// array = [90, 60, 30, 100, 50]
// console.log(findIndexofGreatestElement(array))
/*
14)
Create a function to get the largest even number from an array of integers.
*/
const largestEvenNumberFromArray = (array) => {
    let EvenElements = []
    let j = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            EvenElements[j] = array[i]
            j++
        }
    }
    if (EvenElements[0]) {
        let greatestEvenElements = EvenElements[0]
        for (let i = 0; i < EvenElements.length; i++) {
            if (EvenElements[i] > greatestEvenElements) {
                greatestEvenElements = EvenElements[i]
            }
        }
        return greatestEvenElements
    } else return `there isn't any largest even number in this array`
}
// array = [15, 1, 15, 25, 11]
// array = [15, 1, 20, 25, 16]
// console.log(largestEvenNumberFromArray(array))

/*
15)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const checkPositiveAndNegative = (p1, p2) => {
    if ((p1 > 0 && p2 < 0) || (p1 < 0 && p2 > 0)) {
        return true
    } else {
        return false
    }
}

// console.log('(5,1):', checkPositiveAndNegative(5,1))
// console.log('(-5,-1):', checkPositiveAndNegative(-5,-1))
// console.log('(-5,1):', checkPositiveAndNegative(-5,1))
// console.log('(5,-1):', checkPositiveAndNegative(5,-1))

/*
16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
*/
const string3CharactersLowerCaseOthersUpperCase = (string) => {
    let newString = ""
    if (string.length >= 3) {
        for (let i = 0; i < 3; i++) {
            newString += string[i].toLowerCase()
        }
        for (let i = 3; i < string.length; i++) {
            newString += string[i].toUpperCase()
        }
    }
    else {
        for (let i = 0; i < string.length; i++) {
            newString += string[i].toUpperCase()
        }
    }
    return newString
}
// console.log(string3CharactersLowerCaseOthersUpperCase("Hello"))

/*
17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

const sumOfTwoInteger = (p1, p2) => {
    let sum = p1 + p2
    if (sum > 50 && sum < 80) {
        return 65
    } else {
        return 80
    }
}
// console.log(sumOfTwoInteger(40,20))

/*
18)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const FactorToString = (n) => {
    let output = ""
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            if (i == 3) {
                output += "Diego" // If the number has 3 as a factor, output 'Diego'.
            }
            else if (i == 5) {
                output += "Riccardo" // If the number has 5 as a factor, output 'Riccardo'.
            }
            else if (i == 7) {
                output += "Stefano" // If the number has 7 as a factor, output 'Stefano'.
            }
        }
    }
    if (output) {
        return output
    } else {
        return `"${n}"`
    }
}
// console.log(FactorToString(28))
// console.log(FactorToString(30))
// console.log(FactorToString(34))
/*

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

const acronym = (phrase) => {
    let Acronym = ""
    Acronym = phrase[0].toUpperCase()
    for (let i = 1; i < phrase.length; i++) {
        if (phrase[i] == " ") {
            i++
            Acronym += phrase[i].toUpperCase()
        }
    }
    return Acronym
}
// console.log(acronym("British Broadcasting Corporation"))
// **************************************************************
// If we have more than one space character between words we can use this function to remove the excessive space characters
function removeExcessiveSpaceCharacters(text) {
    let newArr =[]
    let j=0
    arr = text.split(' ')
    for (let i=0;i<arr.length;i++){
        if (arr[i]!=""){
            newArr[j]=arr[i]
            j++
        }
    };
    text=newArr.join(' ')
    return text
  }
// console.log(removeExcessiveSpaceCharacters("British Broadcasting              Corporation"))

// **************************************************************
// ************************* Advanced ***************************
// **************************************************************

/* 1) MAX CHAR
Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const maxChar = (string) => {
    string = string.toLowerCase()
    const letters = {};
    for (i = 0; i < string.length; i++) {
        if (letters[string[i]]) {
            letters[string[i]]++
        } else {
            letters[string[i]] = 1
        }
    }
    let max = 0;
    let maxLetter = ""
    for (let l in letters) {
        if (letters[l] > max) {
            max = letters[l]
            maxLetter = l
        }
    }
    return `${maxLetter} letter with ${max} iteration`
}
// console.log(maxChar("Hello World"))

/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const anagrams = (string1, string2) => {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()
    const letters1 = {};
    const letters2 = {};
    for (i = 0; i < string1.length; i++) {
        if (string1[i] != " " && string1[i] != "!") {
            if (letters1[string1[i]]) {
                letters1[string1[i]]++
            } else {
                letters1[string1[i]] = 1
            }
        }
    }
    for (i = 0; i < string2.length; i++) {
        if (string2[i] != " " && string2[i] != "!") {
            if (letters2[string2[i]]) {
                letters2[string2[i]]++
            } else {
                letters2[string2[i]] = 1
            }
        }
    }
    console.log('letters1:', letters1)
    console.log('letters2:', letters2)
    let sumLetters1 = 0;
    for (let l1 in letters1) {
        sumLetters1 += letters1[l1]
    }
    let sumLetters2 = 0;
    for (let l2 in letters2) {
        sumLetters2 += letters2[l2]
    }
    let compareLetters = 1;
    for (let l1 in letters1) {
        for (let l2 in letters2) {
            if (l1 == l2 && letters1[l1] == letters2[l2]) {
                compareLetters++
            }
        }
    }
    if (sumLetters1 == compareLetters && sumLetters2 == compareLetters) {
        return true
    } else {
        return false
    }
}
// console.log("anagrams('rail safety', 'fairy tales'):", anagrams('rail safety', 'fairy tales'))  // True
// console.log("anagrams('RAIL! SAFETY!', 'fairy tales'):", anagrams('RAIL! SAFETY!', 'fairy tales')) // True
// console.log("anagrams('Hi there', 'Bye there'):", anagrams('Hi there', 'Bye there')) // False

/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

/* 6) STEPS
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING
Given a string, return a new string with the reversed
order of characters
--- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

/* 8) CHUNK
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides
--- Examples
    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]
*/


// matrix(4)
//         [[1, 2, 3, 4],
//         [12, 13, 14, 5],
//         [11, 16, 15, 6],
//         [10,  9,  8, 7]]

