let marks_class_12 = [91, 82, 73, 64]
marks_class_12[5] = 55 // Adding an element at index 5
console.log("The length of marks_class_12 is: ", marks_class_12.length)
console.log("The marks_class_12 of is: ", marks_class_12)
console.log(typeof marks_class_12)

// Array Methods

let num = [1,2,3,4,5]
let b = num.toString() // converts array to string
console.log(b)
let c = num.join("-") // converts array to string with specified separator
console.log(c)
r = num.pop() // removes last element from array and returns it
console.log(num, r)
r = num.push(6) // adds an element at the end of array and returns the new length of array
console.log(num, r)
let d = num.push(10)
console.log(num, d)
let e = num.shift() // removes first element from array and returns it
console.log(num, e)
let f = num.unshift(0) // adds an element at the start of array and returns the new length of array
console.log(num, f)
delete num[0] // deletes the element at index 0 but does not change the length of array
console.log(num)
let marks_class_11 = [45, 56, 67, 78]
let marks = marks_class_11.concat(marks_class_12) // concatenates two arrays
console.log(marks)

// sort() method

let arr = [5, 333, 3, 2, 1]
console.log(arr.sort()) // sorts alphabetically

let compare = (a, b) =>{
    return a - b
}
console.log(arr.sort(compare)) // sorts in ascending order

let abc = [5, 333, 3, 2, 1]
console.log(abc.reverse()) // reverses the array

// splice() and slice() method

let array = [1,2,3,4,5,6,7,8]
let removed = array.splice(2, 3, 10, 11, 12) // removes 3 elements from index 2 and adds 10,11,12 at index 2
console.log(array, removed)
let newArray = array.slice(2,5) // creates a new array from index 2 to 4
console.log(newArray)
let newArray2 = array.slice(2) // creates a new array from index 2 to end
console.log(newArray2)