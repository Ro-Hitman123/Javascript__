console.log(window)
console.log(document) // DOM is the document object model
console.log(document.body)
document.body.style.background = "blue"
document.body.style.fontSize = "50px"
// location.href = "https://www.google.com"

let runAgain = true

const canDrive = (age) => {
    return age>=18? true: false
}
    while(runAgain){
        let age = prompt("Enter your age")
        age = Number.parseInt(age)
if (age<0) {
    console.error("Please enter a valid age")
    break
}
if(canDrive(age)){
    alert("You are allowed to drive the car")
}
else{
    alert("You are not allowed to drive the car")
}
runAgain = confirm("Do you want to run again?")
}

let color = prompt("Enter a color")
document.body.style.background = color