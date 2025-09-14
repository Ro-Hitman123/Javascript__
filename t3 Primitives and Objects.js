//Primitives data types in JavaScript

/*
Null
Number
Symbol
String
Boolean 
BigInt
Undefined
*/ 

let a = null
let b = 345
let c = true
let d = BigInt("567") + BigInt("3")  
let e = "Kritagya"
let f = Symbol("I am a nice symbol")
let g = undefined

console.log(a,b,c,d,e,f,g)
console.log(typeof d)

// Objects in JavaScript

const item = {
    "Kritagya": true,
    "marks": 90,
    "age": 20
}
console.log(item["marks"])
console.log(item.Kritagya)
console.log(typeof item)
console.log(item.age)
console.log(item.dfh)