let marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977,
    rohan: 67,
    Ram: 100
}
for (let i = 0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
}

// By using for in loop

for(let keys in marks){
    console.log("The marks of ", keys + " is " + marks[keys])
}

// Write a function to find mean of the 5 numbers
let mean ={
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}
const numbers = () =>{
    return(mean.a + mean.b + mean.c + mean.d + mean.e)/5
}
console.log("The mean of the 5 numbers is " + numbers())