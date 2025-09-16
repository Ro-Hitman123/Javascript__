let name = "Manish"
// String Methods
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name[3])
console.log(name.slice(1,5))
console.log(name.slice(1))
console.log(name.replace("some","kens"))
console.log(name.indexOf("some"))

let friend = "Kritagya"
console.log(name.concat(" is a friend of ", friend))
console.log(friend.trim())


// Template Literals
let boy1 = "Saroj"
let boy2 = "Paras"
let friendship = `${boy1} is a friend of ${boy2}`// String Interpolation in which we can use variable inside string or inside backticks
console.log(friendship)

//Escape sequence characters
let fruit = 'Bana\'na'
console.log(fruit)

let fruit2 = "Bana\"na"
console.log(fruit2)

let fruit3 = "Bana\rna"
console.log(fruit3)

let fruit4 = "Bana\rna"
console.log(fruit4)

let fruit5 = "Bana\tna"
console.log(fruit5)