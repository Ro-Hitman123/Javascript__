console.log("Hey there!")
console.error("This is an error message")
console.assert(5>53)
// console.clear()
let obj = {name: "John", age: 30, city: "New York"}
console.table(obj)
console.warn("hey please don't do that!")
console.info("Hey this is an important information")
console.time("Your code took")
console.timeEnd("Your code took")
console.time("for Loop")
for(let i=0; i<1000000; i++){}
console.timeEnd("for Loop")
console.trace("Here is the trace")