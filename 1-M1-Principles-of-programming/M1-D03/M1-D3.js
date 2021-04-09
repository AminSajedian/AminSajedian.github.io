/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/
let myArray = [2, 4, 6, 8, 10]

/* WRITE YOUR CODE HERE */


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
let myObject = { name: "Mohammadamin", surname: "Sajedian", "email Address": "mohammadsajedian@gmail.com", age: 31 }

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Add to the previously created object a boolean value to represent whether you have or not a driving license.
*/
myObject.hasDrivingLicense = true

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete myObject.age

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
// const mySecondObject = {
//     name: "John",
//     surname: "Louis",
//     "email Address": "abc@gmail.com",
//     hasDrivingLicense: true,
// }

// if (myObject["email Address"] === mySecondObject["email Address"]) {
//     console.log("This email address", myObject["email Address"], "is the same as the", mySecondObject["email Address"])
// } else {
//     console.log("This email address", myObject["email Address"], "is different from", mySecondObject["email Address"])
// }

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart=30
if (totalShoppingCart>=50){console.log("You are eligible for free shipping")
totalCost=totalShoppingCart
console.log("Your Total Cost is", totalCost)
}
else {console.log("You are not eligible for free shipping")
totalCost=totalShoppingCart+10
console.log("Your Total Cost is", totalCost)
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let totalShoppingCart = 50
if (totalShoppingCart >= 50) {
    console.log("(Black Friday | 20% discount) & You are eligible for free shipping.")
    totalCost = (totalShoppingCart*0.2)
    console.log("Your Total Cost is", totalCost)
}
else {
    console.log("(Black Friday | 20% discount) & You are not eligible for free shipping.")
    totalCost = ((totalShoppingCart + 10)*0.2)
    console.log("Your Total Cost is", totalCost)
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
const car0 = { brand: "BMW", model: "X3", licensePlate: "12ac5", }

const car1 = Object.assign({}, car0)
car1.licensePlate = "53sb1"
const car2 = Object.assign({}, car0)
car2.licensePlate = "86sb3"
const car3 = Object.assign({}, car0)
car3.licensePlate = "34hc4"
const car4 = Object.assign({}, car0)
car4.licensePlate = "38gd8"
const car5 = Object.assign({}, car0)
car5.licensePlate = "53we6"

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
let carsForRent = [car0, car1, car2, car3, car4, car5]
/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift(car0)
carsForRent.pop(car5)

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
for (let i = 0; i < carsForRent.length; i++) {
    console.log(carsForRent[i].brand)
}
for (let i = 0; i < carsForRent.length; i++) {
    console.log(carsForRent[i].model)
}
for (let i = 0; i < carsForRent.length; i++) {
    console.log(carsForRent[i].licensePlate)
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
let carsForSale = [{ brand: 'BMW', model: 'X3', licensePlate: '53sb1' },
{ brand: 'BMW', model: 'X3', licensePlate: '86sb3' },
{ brand: 'BMW', model: 'X3', licensePlate: '34hc4' }]

let totalCars = carsForSale.length + carsForRent.length
console.log(totalCars)
/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForRent[i])
}
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/