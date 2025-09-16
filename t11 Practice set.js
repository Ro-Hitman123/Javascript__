// includes() method
const sentence = "This is my first sentence."
const word = "first"
console.log(sentence.includes(word))  // true
const word2 = "First1"
console.log(sentence.includes(word2))// false

// startsWith() method
console.log(sentence.startsWith("This")) // true
console.log(sentence.startsWith("this")) // false

// endsWith() method
console.log(sentence.endsWith("sentence.")) // true
console.log(sentence.endsWith("Sentence.")) // false 

// slice() method
let str = "Please give Rs 1000"
let amount = str.slice("Please give Rs ".length)
console.log(amount)

// Strings are immutable
let friend = "Loknath"
friend[3] = "p" // This will not work as strings are immutable
console.log(friend) // Loknath