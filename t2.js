// Var vs Let vs Const

/*Var is function scoped.
Let and Const are block scoped.
Const cannot be reassigned.
Let can be reassigned.
Var can be reassigned.*/

var a = 45
console.log(a)  
a = "Kritagya1"
console.log(a)
let b = "Kritagya2"
const author = "Kritagya3"
console.log(a)
{
    let b = "Hello"
    console.log(b)  
}
console.log(b)  