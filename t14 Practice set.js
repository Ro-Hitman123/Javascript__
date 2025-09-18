// Create an array of numbers and take input from the user to add numbers to this array.

/* let numbers = [10, 20, 30, 40, 50]
let userInput = prompt("Enter a number to add to the array:");
userInput = Number.parseInt(userInput)
numbers.push(userInput)
console.log(numbers) */

// Keep adding numbers to the array in i) until 0 is added to the array.

/* do {
let numbers = [10, 20, 30, 40, 50]
let userInput = prompt("Enter a number to add to the array:");
userInput = Number.parseInt(userInput)
numbers.push(userInput)
console.log(numbers)
} while (userInput != 0) */

// Filter for numbers divisible by 10 from a given array

/* let arr = [10, 23, 45, 60, 72, 80, 91, 100]
let divisible = arr.filter((value) => {
    return value % 10 === 0
});
console.log(divisible) */

// Create an array of square of given numbers

/* let numbers = [1, 2, 3, 4, 5]
let square = numbers.map((x) => {
    return (x * x)
})
console.log(square) */

// Use reduce to calculate the factorial of a given number from an array of first n natural numbers. (n being the number whose factorial needs to be calculated).

/* let numbers = [1, 2, 3, 4, 5]
let n = numbers.reduce((x1, x2) => {
    return (x1 * x2)
})
console.log(n) */
