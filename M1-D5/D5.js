/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]
/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it. 
*/
let test = "This is a test"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = Math.random() * 20
// console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = { name: "my name", surname: "my surname", age: 32 }

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age
// console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
const skills = ["HTML", "CSS", "JavaScript", "Assembly", "C#"]
me.skills = skills
// console.log(me)

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
me.skills.pop()
// console.log(me)

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
//                                Math.floor(Math.random() *(max-min)) +min;
const dice = function () { return Math.floor(Math.random() * (6 - 1)) + 1; }
// console.log(dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) { return `${num1} is the biggest one` }
  else { return `${num2} is the biggest one` }
}
// console.log(whoIsBigger(4,3))

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
const splitMe = function (string) { return string.split(" ") }
// console.log(splitMe("I love coding"))

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
const deleteOne = function (string, boolean) {
  if (boolean === true) {
    return string.slice(1)
  } else {
    return string.slice(0, string.length - 1)
  }
}
// console.log(deleteOne("Test", true))
// console.log(deleteOne("Test", false))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = function (string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (Number.isNaN(parseInt(string[i]))) {
      newString += string[i];
    }
  }
  return newString;
}
// console.log(onlyLetters("I have 4 dogs"));

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = function (string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "@") {
      return true;
    }
  }
  return false;
}
// console.log(isThisAnEmail("email@abc.com"));

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = function () {
  dow = new Date().getDay();
  switch (dow) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return `${day} is current day of the week`;
}
// console.log(whatDayIsIt());



/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
const rollTheDices = function (n) {
  let object = {}
  let ArrValues = []
  object.sum = 0
  for (i = 0; i < n; i++) {
    d = dice()
    object.sum += d
    ArrValues[i] = d
  }
  object.Values = ArrValues
  return object
}
// console.log(rollTheDices(3))
/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const howManyDays = function (input) {
  let now = new Date()
  let nowinmsec = Date.parse(now);
  let inputinmsec = Date.parse(input)
  let passedinmsec = nowinmsec - inputinmsec
  passeddays = passedinmsec / 86400000
  return `number of days passed: ${passeddays}`
}
// console.log(howManyDays("2021-03-01"))

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
const isTodayMyBirthday = function () {
  let now = new Date()
  if (now.getMonth() === 8 && now.getDate() === 17) {
    return true
  } else { return false }
}
// console.log(isTodayMyBirthday())

// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)


// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

cars = { carName: "Ford", models: ["Fiesta", "Focus", "Mustang"] }

const deleteProp = function (object, p) {
  delete object[p]
  return object
}
// deleteProp(cars, "carName")
// console.log(cars)

/* Ex.12
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = function () {
  let result = movies[0].Year
  for (let i = 0; i < movies.length; i++) {
    if (result > movies[i].Year) {
      result = movies[i].Year
    }
  }
  return result
}

// console.log(olderMovie())

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/


const countMovies = function () {
  return movies.length
}

// console.log(countMovies())

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
const onlyTheTitles = function () {
  let j = 0
  let Title = []
  for (let i = 0; i < movies.length; i++) {
    Title[j] = movies[i].Title
    j++
  }
  return Title
}

// console.log(onlyTheTitles())

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

const onlyInThisMillennium = function () {
  let j = 0
  let InThisMillennium = []
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year >= 2000) {
      InThisMillennium[j] = movies[i]
      j++
    }
  }
  return InThisMillennium
}

// console.log(onlyInThisMillennium())

/* Ex.16
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

const getMovieById = function (id) {
  for (let i = 0; i < movies.length; i++) {
    if (id === movies[i].imdbID) {
      MovieById = movies[i]
    }
  }
  return MovieById
}

// console.log(getMovieById("tt2395427"))

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = function () {
  let sum = 0
  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year)
  }
  return sum
}

// console.log(sumAllTheYears())

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/


const searchByTitle = function (Title) {
  Title = Title.toLowerCase()
  let j = 0
  let MoviesByTitle = []
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().search(Title) != -1) {
      MoviesByTitle[j] = movies[i]
      j++
    }
  }
  return MoviesByTitle
}

// console.log(searchByTitle("avengers"))

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

const searchAndDivide = function (string) {
  string = string.toLowerCase()
  let j = 0
  let q = 0
  let result = { match: [], unmatch: [] }

  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().search(string) !== -1) {
      // console.log(movies[i])
      match[j] = movies[i]
      j++
    } else {
      unmatch[q] = movies[i]
      q++
    }
  }
  return result
}
// console.log(searchAndDivide("avengers"))

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
const removeIndex = function (number) {
  let result = []
  for (let i = 0; i < movies.length; i++) {
    if (number !== i)
      result.push(movies[i])
  }
  return result
}
// console.log(removeIndex(0))

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
const halfTree = function (number) {
  let string = "*"
  for (i = 0; i < number; i++) {
    console.log(string)
    string += "*"
  }
  return `halfTree (${number})`
}
// console.log(halfTree(5))


/* Ex.22
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example:
  tree(3)
    *
   ***
  *****
*/

const tree = function (number) {
  let star = "*"
  let space = " "
  for (i = 0; i < number; i++) {
    space += " "
  }
  for (i = 0; i < number; i++) {
    console.log(space + star)
    star += "**"
    space = space.slice(0, space.length - 1)
  }
  return `tree (${number})`
}
// console.log(tree(5))

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

const isItPrime = function (number) {
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

// console.log(isItPrime(11))
