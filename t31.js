// let a = document.getElementsByClassName("container")[0]
// a.onclick = () => {
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML = "Hello World!"
// }

let x = function(e) {
    console.log(e.target)
    alert("Hello World1!")
}

// let y = function(e) {
//     alert("Hello World2!")
// }

btn.addEventListener('click', x)
// btn.addEventListener('click', y)

// let a = prompt("What is your favourite number?")

// if (a == 2) {
//     btn.removeEventListener('click', y)
// }