console.log("Operators in JavaScript")
let a = 34
let b = 5
console.log("The value of a + b is", a + b)
console.log("The value of a - b is", a - b)
console.log("The value of a * b is", a * b)
console.log("The value of a / b is", a / b)
console.log("The value of a**b is", a ** b)
console.log("The value of a % b is", a % b)
console.log("The value of ++a is", ++a)
console.log("The value of --a is", --a)
console.log("The value of a++ is", a++)
console.log("The value of a-- is", a--)
console.log(a)

// Assignment operators
let c = b
c += 2
console.log(c)

// Comparison operators
console.log(c == b)
console.log(c >= b)
console.log(c <= b)
console.log(c > b)
console.log(c < b)
console.log(c != b)
console.log(c === b) // This checks value as well as datatype.
console.log(c !== b) // This checks value as well as datatype.

// Logical operators
console.log(c < b && c > b)
console.log(c < b || c > b)
console.log(!(c < b))
console.log(!(c > b))

// Create a variable of type string and try to add a number to it. Observe the results.
let str = "Hello"
let num = 5
console.log(str + num)

// Create typeof operator to find the datatype of the string in last question.
console.log(typeof (str + num))