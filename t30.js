// document.write("Hello")
// let a = setTimeout(function() {
//     alert("I am inside of setTimeout")
// },2000)
// console.log(a)

const sum = (a,b) => {
    document.write("Yes I am running<br>" + (a+b + "<br>"))
}
setTimeout(sum, 1000, 21 ,24)
setInterval(sum, 1000, 3, 4)