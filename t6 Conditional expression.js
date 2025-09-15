let a = 15;
let b = 11;
if (a > b) {
    console.log(a);
} 
else if (a == b){
    console.log("Equal");
}
else {
    console.log(b);
}

//ternary operator
console.log(a > b ? a : a == b ? "Equal" : b);