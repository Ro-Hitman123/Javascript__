// Create a variable of type string and try to add a number to it. Observe the results.

let a = "Kritagya"
let b = 34
console.log(a + b)  

// Create typeof operator to find the datatype of the string in last question.

console.log(typeof (a + b))

const c = {
    name: "Kritagya",
    age: 20 
}

// c = 45 This will give an error as we cannot reassign a constant variable.
// c = {} This will also give an error as we cannot reassign a constant variable.

c["friend"] = "Saroj"
console.log(c)