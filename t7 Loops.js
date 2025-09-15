for (let i = 0; i < 5; i++){
    console.log(i); 
}

// for in p
let obj = {
    name: "Kritagya",
    age: 19,
    type: "Programmer",
    os: "Windows"
}
for (let a in obj){
    console.log(`The ${a} of object is ${obj[a]}`)
}

// for of loop
for (let b of "Kritagya"){
    console.log(b);
}