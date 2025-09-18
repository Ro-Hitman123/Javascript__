// Write a js program to generate a random number and store it in a variavle. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 - 100.

let randomNumber = Math.floor(Math.random() * 100) + 1
let userGuess = prompt("Guess a number between 1 and 100")
userGuess = Number.parseInt(userGuess)
let noOfGuesses = 1
while (userGuess !== randomNumber) {
    if (userGuess > randomNumber) {
        console.log("Your guess is lesser than the number")
    } else {
        console.log("Your guess is greater than the number")
    }
    userGuess = prompt("Guess a number between 1 and 100")
    userGuess = Number.parseInt(userGuess)
    noOfGuesses += 1
}
let score = 100 - noOfGuesses
console.log("Your score is: " + score)
console.log("Congratulations! You guessed the number " + randomNumber + " in " + noOfGuesses + " guesses.")