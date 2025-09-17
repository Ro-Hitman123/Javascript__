let num = [3, 5, 1, 2, 4]
for (let i = 0; i<num.length; i++){
    console.log(num[i]*num[i])
}

// forEach Loop

num.forEach((element) => {
    console.log(element*element)
})

// Array.from()
let name = "Kritagya"
let arr = Array.from(name)
console.log(arr)

// for of loop
for (let i of num){
    console.log(i)
}

// for in Loop

for (let index in num){
    console.log(num[index])
}

// map() method is used to create a new array by performing some operation on each element of the array

let newNum = [45, 23, 21]
let a =newNum.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a) // new array is created by adding index to each element of the array

// filter() method is used to create a new array by filtering out some elements of the array based on some condition

let newNum2 = [45, 1, 21, 67, 34, 89]
let b = newNum2.filter((value) => {
    return value < 10
})
console.log(b) // new array is created by filtering out elements less than 10

// reduce() method is used to reduce the array to a single value by performing some operation on each element of the array
let newNum3 = [5, 6, 2, 3]
let c = newNum3.reduce((h1, h2) => {
 return h1 + h2
})
console.log(c) // returns the sum of all elements in the array