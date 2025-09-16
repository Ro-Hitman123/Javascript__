let marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977,
    rohan: 67,
    skillf: 100
}
for (let i = 0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
}

// By using for in loop

for(let keys in marks){
    console.log("The marks of " + keys + " is " + marks[keys])
}